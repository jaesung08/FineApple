<template>
    <div class="profile-container">
        <h1>{{ store.userData.nickname }}의 프로필</h1>
      <div class="profile-info">
        <p><strong>이름:</strong> {{ store.userData.nickname }}</p>
        <p><strong>아이디:</strong> {{ store.userData.username }}</p>
        <p><strong>나이:</strong> {{ store.userData.age }}세</p>
        <p><strong>돈:</strong> {{ store.userData.money }}원</p>
        <p><strong>월급:</strong> {{ store.userData.salary }}원</p>
        <p><strong>선택 상품:</strong> {{ store.userData.financial_products }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useCounterStore } from '@/stores/counter';
  
  const store = useCounterStore();

  // 페이지 로딩 시 프로필 정보 가져오기
  onMounted(() => {
   store.getUserProfile()
  });
  
  </script>
  
  <style scoped>
  .profile-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    color: #1E4B4C;
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .profile-info {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  
  strong {
    margin-right: 10px;
  }
  </style>
  