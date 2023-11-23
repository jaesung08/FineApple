<template>
  <div>
    <h1 class="detail-title"></h1>
    <div v-if="article" class="article-details">
      <h2 class="article-title">{{ article.title }}</h2>
      <div class="article-metadata">
        <p class="article-content">{{ article.content }}</p>
        <div class="details">
          <p>
            조회수: {{ article.views }} / 좋아요: {{ article.likes.length }} /
            댓글수: {{ article.comment_set.length }} / 작성자:
            {{ article.user.name }} / 작성일:
            {{ formatDate(article.created_at) }}
          </p>
        </div>
        <button
          @click="likeArticle"
          class="like-button"
          :class="{ liked: isLiked }"
        >
          {{ isLiked ? "좋아요 취소" : "좋아요" }}
        </button>
      </div>
      <div class="comment-section">
        <h3>댓글</h3>
        <div v-if="article.comment_set.length > 0">
          <ul>
            <li v-for="comment in article.comment_set" :key="comment.id">
              <div class="comment-content">
                <p>{{ comment.user.name }}:</p>
                <p>{{ comment.comment }}</p>
                <p>{{ formatDate(comment.created_at) }}</p>
              </div>

              <button
                v-if="isCommentAuthor(comment.user.id)"
                @click="deleteComment(comment.id)"
              >
                삭제
              </button>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>작성된 댓글이 없습니다.</p>
        </div>
        <RouterLink
          :class="addCommentLink"
          :to="{ name: 'AddCommentView', params: { id: route.params.id } }"
          >댓글 작성</RouterLink
        >
      </div>
    </div>

    <RouterLink to="/article">뒤로가기</RouterLink> |
    <RouterLink
      v-if="isAuthor"
      :to="{ name: 'DetailEditView', params: { id: route.params.id } }"
      >게시글 수정</RouterLink
    >
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, computed, onBeforeMount } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const store = useCounterStore();
const route = useRoute();
const article = ref({ user: "", likes: [], views: [], comment_set: [] });

const nextRoute = ref("");

onMounted(() => {
  axios({
    method: "get",
    url: `${store.API_URL}/articles/${route.params.id}/`,
  })
    .then((res) => {
      console.log("res:", res.data);
      article.value = res.data;
      console.log("article.value:", article.value);
    })
    .catch((error) => {
      console.log(error);
    });
  nextRoute.value = route.params.id;
});

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// 사용자가 현재 게시물에 대해 좋아요를 눌렀는지 여부를 확인
const isLiked = computed(() => {
  if (store.isLogin == false) {
    return isLiked == false;
  }
  return article.value.likes.includes(store.userData.pk);
});

// 게시물의 작성자와 로그인된 유저의 pk 값을 비교하여 권한을 확인
const isAuthor = computed(() => {
  if (store.isLogin == false) {
    console.log("로그인 x");
    return isAuthor == false;
  }
  return article.value.user.id === store.userData.pk;
});

// 게시물 좋아요 , 로그인 안할 시 로그인 페이지로
const likeArticle = () => {
  if (store.isLogin == false) {
    alert("로그인이 필요합니다.");
    return router.push({ name: "LogInView" });
  }

  axios({
    method: "post",
    url: `${store.API_URL}/articles/${route.params.id}/like/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
    .then((response) => {
      console.log("좋아요 성공");
      console.log(response.data);
      location.reload();
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

// Add Comment Section
const addCommentLink = computed(() => {
  return store.isLogin
    ? { name: "AddCommentView", params: { id: route.params.id } }
    : null;
});

// 댓글 삭제 함수
const deleteComment = async (commentId) => {
  try {
    await axios.delete(
      `${store.API_URL}/articles/${route.params.id}/comment/${commentId}/`,
      {
        headers: {
          Authorization: `Token ${store.token}`,
        },
      }
    );
    alert("댓글이 삭제되었습니다.");
    location.reload();
  } catch (error) {
    console.error(error.response.data);
    alert("댓글 삭제 중 오류가 발생했습니다.");
  }
};

// 현재 사용자가 댓글 작성자인지 확인하는 함수
const isCommentAuthor = (userId) => {
  return store.isLogin && userId === store.userData.pk;
};
</script>

<style scoped>
.detail-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.article-details {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.article-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.article-metadata {
  color: #555;
  font-size: 0.8em;
}

.article-content {
  margin-top: 10px;
  line-height: 1.5; /* 텍스트 간격을 조절하여 가독성을 높임 */
}

.like-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.liked {
  background-color: #e74c3c; /* Red */
}

.comment-section {
  margin-top: 20px;
}

.comment-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.comment-section ul {
  list-style: none;
  padding: 0;
}

.comment-section li {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
}

.comment-section li p {
  margin: 0;
}

.comment-section p {
  margin: 0;
}
</style>

<style scoped>
.detail-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.article-details {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.article-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.article-metadata {
  color: #555;
  font-size: 0.8em;
}

.article-content {
  margin-top: 10px;
  line-height: 1.5;
}

.like-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.liked {
  background-color: #e74c3c;
}

.comment-section {
  margin-top: 20px;
}

.comment-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.comment-section ul {
  list-style: none;
  padding: 0;
}

.comment-section li {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-content {
  flex: 1;
}

.comment-section li p {
  margin: 0;
}

.comment-section p {
  margin: 0;
}

.comment-section button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
<!-- 
<template>
  <div class="detail-container">
    <h1 class="detail-title">상세정보</h1>
    <div v-if="article" class="article-details">
      <p class="article-meta">글 번호: {{ article.id }}</p>
      <h2 class="article-title">제목: {{ article.title }}</h2>
      <div class="article-metadata">
        <p class="article-content">내용: {{ article.content }}</p>
        <p class="article-meta">조회수: {{ article.views }}</p>
        <p class="article-meta">좋아요: {{ article.likes.length }}</p>
        <p class="article-meta">댓글수: {{ article.comment_set.length }}</p>
        <p class="article-meta">작성자: {{ article.user.name }}</p>
        <p class="article-meta">작성일: {{ formatDate(article.created_at) }}</p>
        <button
          @click="likeArticle"
          class="like-button"
          :class="{ liked: isLiked }"
        >
          {{ isLiked ? "좋아요 취소" : "좋아요" }}
        </button>
      </div>
      <div class="comment-section">
        <h3>댓글</h3>
        <div v-if="article.comment_set.length > 0">
          <ul>
            <li v-for="comment in article.comment_set" :key="comment.id">
              <div class="comment-content">
                <p class="comment-author">{{ comment.user.name }}:</p>
                <p class="comment-text">{{ comment.comment }}</p>
                <p class="comment-date">{{ formatDate(comment.created_at) }}</p>
              </div>
              <button
                v-if="isCommentAuthor(comment.user.id)"
                @click="deleteComment(comment.id)"
                class="delete-comment-button"
              >
                삭제
              </button>
            </li>
          </ul>
        </div>
        <div v-else>
          <p class="no-comments">작성된 댓글이 없습니다.</p>
        </div>
        <RouterLink
          :class="addCommentLink"
          :to="{ name: 'AddCommentView', params: { id: route.params.id } }"
          class="add-comment-link"
        >
          댓글 작성
        </RouterLink>
      </div>
    </div>

    <RouterLink to="/article" class="back-link">뒤로가기</RouterLink> |
    <RouterLink
      v-if="isAuthor"
      :to="{ name: 'DetailEditView', params: { id: route.params.id } }"
      class="edit-link"
    >
      게시글 수정
    </RouterLink>
  </div>
</template>

<script setup>
// ... (이전과 동일)

// 사용자가 현재 게시물에 대해 좋아요를 눌렀는지 여부를 확인
const isLiked = computed(() => {
  if (store.isLogin == false) {
    return isLiked == false;
  }
  return article.value.likes.includes(store.userData.pk);
});

// 게시물의 작성자와 로그인된 유저의 pk 값을 비교하여 권한을 확인
const isAuthor = computed(() => {
  if (store.isLogin == false) {
    console.log("로그인 x");
    return isAuthor == false;
  }
  return article.value.user.id === store.userData.pk;
});

// ... (이전과 동일)
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.detail-title {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.article-details {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.article-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.article-metadata {
  color: #555;
  font-size: 0.8em;
}

.article-content {
  margin-top: 10px;
  line-height: 1.5;
}

.like-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.liked {
  background-color: #e74c3c;
}

.comment-section {
  margin-top: 20px;
}

.comment-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.comment-section ul {
  list-style: none;
  padding: 0;
}

.comment-section li {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-content {
  flex: 1;
}

.comment-section li p {
  margin: 0;
}

.comment-section p {
  margin: 0;
}

.delete-comment-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.no-comments {
  text-align: center;
}

.add-comment-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #1e4b4c;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.add-comment-link:hover {
  background-color: #153737;
}

.back-link,
.edit-link {
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #1e4b4c;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.back-link:hover,
.edit-link:hover {
  background-color: #153737;
}
</style> -->
<!-- 
<template>
  <div class="detail-container">
    <h1 class="detail-title">Detail</h1>
    <div v-if="article" class="article-details">
      <p>글 번호: {{ article.id }}</p>
      <h2 class="article-title">제목: {{ article.title }}</h2>
      <div class="article-metadata">
        <p class="article-content">내용: {{ article.content }}</p>
        <p>조회수: {{ article.views }}</p>
        <p>좋아요: {{ article.likes.length }}</p>
        <p>댓글수: {{ article.comment_set.length }}</p>
        <p>작성자: {{ article.user.name }}</p>
        <p>작성일: {{ formatDate(article.created_at) }}</p>
        <button
          @click="likeArticle"
          class="like-button"
          :class="{ liked: isLiked }"
        >
          {{ isLiked ? "좋아요 취소" : "좋아요" }}
        </button>
      </div>
      <div class="comment-section">
        <h3>댓글</h3>
        <div v-if="article.comment_set.length > 0">
          <ul>
            <li v-for="comment in article.comment_set" :key="comment.id">
              <div class="comment-content">
                <p>{{ comment.user.name }}:</p>
                <p>{{ comment.comment }}</p>
                <p>{{ formatDate(comment.created_at) }}</p>
              </div>

              <button
                v-if="isCommentAuthor(comment.user.id)"
                @click="deleteComment(comment.id)"
                class="delete-comment-button"
              >
                삭제
              </button>
            </li>
          </ul>
        </div>
        <div v-else>
          <p class="no-comments">작성된 댓글이 없습니다.</p>
        </div>
        <RouterLink
          :class="addCommentLink"
          :to="{ name: 'AddCommentView', params: { id: route.params.id } }"
          class="add-comment-link"
        >
          댓글 작성
        </RouterLink>
      </div>
    </div>

    <RouterLink to="/article" class="back-link">뒤로가기</RouterLink> |
    <RouterLink
      v-if="isAuthor"
      :to="{ name: 'DetailEditView', params: { id: route.params.id } }"
      class="edit-link"
    >
      게시글 수정
    </RouterLink>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const store = useCounterStore();
const route = useRoute();
const article = ref({ user: "", likes: [], views: [], comment_set: [] });

onMounted(() => {
  axios({
    method: "get",
    url: `${store.API_URL}/articles/${route.params.id}/`,
  })
    .then((res) => {
      console.log("res:", res.data);
      article.value = res.data;
      console.log("article.value:", article.value);
    })
    .catch((error) => {
      console.log(error);
    });
});

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// 사용자가 현재 게시물에 대해 좋아요를 눌렀는지 여부를 확인
const isLiked = computed(() => {
  if (store.isLogin == false) {
    return isLiked == false;
  }
  return article.value.likes.includes(store.userData.pk);
});

// 게시물의 작성자와 로그인된 유저의 pk 값을 비교하여 권한을 확인
const isAuthor = computed(() => {
  if (store.isLogin == false) {
    console.log("로그인 x");
    return isAuthor == false;
  }
  return article.value.user.id === store.userData.pk;
});

// 게시물 좋아요 , 로그인 안할 시 로그인 페이지로
const likeArticle = () => {
  if (store.isLogin == false) {
    alert("로그인이 필요합니다.");
    return router.push({ name: "LogInView" });
  }

  axios({
    method: "post",
    url: `${store.API_URL}/articles/${route.params.id}/like/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
    .then((response) => {
      console.log("좋아요 성공");
      console.log(response.data);
      location.reload();
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

// Add Comment Section
const addCommentLink = computed(() => {
  return store.isLogin
    ? { name: "AddCommentView", params: { id: route.params.id } }
    : null;
});

// 댓글 삭제 함수
const deleteComment = async (commentId) => {
  try {
    await axios.delete(
      `${store.API_URL}/articles/${route.params.id}/comment/${commentId}/`,
      {
        headers: {
          Authorization: `Token ${store.token}`,
        },
      }
    );
    alert("댓글이 삭제되었습니다.");
    location.reload();
  } catch (error) {
    console.error(error.response.data);
    alert("댓글 삭제 중 오류가 발생했습니다.");
  }
};
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.detail-title {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.article-details {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.article-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.article-metadata {
  color: #555;
  font-size: 0.8em;
}

.article-content {
  margin-top: 10px;
  line-height: 1.5;
}

/* 스타일이 적용된 상세 페이지 컴포넌트의 스타일 */
.like-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.liked {
  background-color: #e74c3c;
}

.comment-section {
  margin-top: 20px;
}

.comment-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.comment-section ul {
  list-style: none;
  padding: 0;
}

.comment-section li {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-content {
  flex: 1;
}

.comment-section li p {
  margin: 0;
}

.delete-comment-button {
  background-color: #e74c3c;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-comment-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  color: #fff;
  background-color: #1e4b4c;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.add-comment-link:hover {
  background-color: #153737;
}

.back-link,
.edit-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  color: #fff;
  background-color: #1e4b4c;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.back-link:hover,
.edit-link:hover {
  background-color: #153737;
}

.no-comments {
  color: #777;
  margin: 10px 0;
}
</style> -->
