<template>
  <div>
    <h1 class="detail-title">Detail</h1>
    <div v-if="article" class="article-details">
      <p>글 번호 : {{ article.id }}</p>
      <h2 class="article-title">제목: {{ article.title }}</h2>
      <div class="article-metadata">
        <p class="article-content">내용: {{ article.content }}</p>
        <p>조회수: {{ article.views }} </p>
        <p>좋아요: {{ article.likes.length }} </p>
        <p>댓글수: {{ article.comment_set.length }}</p>
        <p>작성자: {{ article.user }}</p>
        <p>작성일: {{ formatDate(article.created_at) }}</p>
        <button @click="likeArticle" class="like-button" :class="{ liked: isLiked }">
          {{ isLiked ? '좋아요 취소' : '좋아요' }}
        </button>
      </div>
    </div>
    <RouterLink to="/article">뒤로가기</RouterLink>
    <RouterLink v-if="isAuthor" :to="{name: 'DetailEditView', params : { id : route.params.id }}">게시글 수정</RouterLink> | 
   
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const store = useCounterStore();
const route = useRoute();
const article = ref(null);

const nextRoute = ref("")

onMounted(() => {
  axios({
    method: 'get',
    url: `${store.API_URL}/articles/${route.params.id}/`,
  })
    .then((res) => {
      console.log(res.data);
      article.value = res.data;
      getArticle();
    })
    .catch((error) => {
      console.log(error);
    });
    nextRoute.value = route.params.id
});


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// 사용자가 현재 게시물에 대해 좋아요를 눌렀는지 여부를 확인
const isLiked = computed(() => {
  return article.value.likes.includes(store.userData.pk);
});

// 게시물의 작성자와 로그인된 유저의 pk 값을 비교하여 권한을 확인
const isAuthor = computed(() => {
  return article.user === store.userData.pk;
});

const likeArticle = () => {
  if (!store.token) {
    // 로그인되어 있지 않으면 로그인 페이지로 이동
    alert("로그인이 필요합니다.");
    router.push({ name: "LogInView" });
    return;
  }

  axios({
    method: 'post',
    url: `${store.API_URL}/articles/${route.params.id}/like/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
    .then((response) => {
      console.log('좋아요 성공');
      console.log(response.data);
      location.reload();
    })
    .catch((error) => {
      console.log(error.response.data);
    });
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
  background-color: #4CAF50; /* Green */
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
</style>
