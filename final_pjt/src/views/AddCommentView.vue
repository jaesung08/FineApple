<template>
    <div>
      <h1 class="comment-title">댓글 작성</h1>

    <!-- <div v-if="article">
        <h1 class="detail-title">Detail</h1>
        <div class="article-details">
          <div class="comment-section">
            <h3>댓글</h3>
            <template v-if="article.comment_set.length > 0">
              <ul>
                <li v-for="comment in article.comment_set" :key="comment.id">
                  <p>{{ comment.user.name }}:</p>
                  <p>{{ comment.content }}</p>
                  <p>{{ formatDate(comment.created_at) }}</p>
                </li>
              </ul>
            </template>
            <template v-else>
              <p>작성된 댓글이 없습니다.</p>
            </template>
          </div>
        </div>
      </div> -->

      <form @submit.prevent="submitComment">
        <div>
          <label for="comment">댓글 내용:</label>
          <textarea v-model="comment" id="comment" rows="4"></textarea>
        </div>
        <button type="submit">댓글 작성</button>
      </form>
  

  
      <RouterLink :to="{ name: 'DetailView', params: { id: route.params.id } }">뒤로 가기</RouterLink>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useCounterStore } from '@/stores/counter';

  const store = useCounterStore();
  const router = useRouter();
  const route = useRoute();
  const comment = ref('');
  
//   // 현재 게시물 정보를 가져오는 함수
//   const getArticle = async () => {
//     try {
//       const response = await axios.get(`${store.API_URL}/articles/${route.params.id}/`);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };
  
  // 댓글 작성 함수
  const submitComment = async () => {
    try {
      await axios.post(`${store.API_URL}/articles/${route.params.id}/comment/`, {
        comment: comment.value,
      }, {
        headers: {
          Authorization: `Token ${store.token}`,
        },
      });
      alert('댓글이 작성되었습니다.');
      router.push({ name: 'DetailView', params: { id: route.params.id } });
    } catch (error) {
      console.error(error.response.data);
      alert('댓글 작성 중 오류가 발생했습니다.');
    }
  };
  
//   // 초기에 게시물 정보를 가져와 article 변수에 할당
//   const article = ref(null);
//   onMounted(async () => {
//     article.value = await getArticle();
//   });
  </script>

  <style scoped>
  .comment-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  form {
    margin-bottom: 20px;
  }
  
  textarea {
    width: 100%;
    resize: vertical;
  }
  
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }
  </style>
  