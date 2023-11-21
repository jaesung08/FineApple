<template>
  <div class="box">
    <p>{{ article.id }}</p>
    <p class="title">제목: {{ article.title }}</p>
    <p class="content">내용: {{ article.content }}</p>
    <p>조회수: {{ article.views }} </p>
    <p>좋아요: {{ article.likes_count }} </p>
    <p>댓글수: {{ article.comments_count }}</p>
    <p>작성자: {{ (article.user).name }}</p>
    <p>작성일: {{ formatDate(article.created_at) }}</p>
    
    <RouterLink :to="{ name: 'DetailView', params: { id: article.id } }">
      [상세정보]
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  article: Object,
});

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ko-KR', options);
};


</script>

<style scoped>
.box {
  border: 1px solid;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}

.title {
  font-weight: bold;
}

.content {
  color: #333; /* 내용 글자색을 어두운 색으로 설정 */
}
</style>
