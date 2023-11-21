<template>
    <div class="profile-container" v-if="store.userData">
        <h1>{{ store.userData.name }}의 프로필</h1>
      <div class="profile-info">
        <p><strong>이름:</strong> {{ store.userData.name }}</p>
        <p><strong>아이디:</strong> {{ store.userData.username }}</p>
        <p><strong>나이:</strong> {{ store.userData.age }}세</p>
        <p><strong>자산:</strong> {{ store.userData.money }}원</p>
        <p><strong>매달 저축 가능 금액:</strong> {{ store.userData.saving_possible_money  }}원</p>
        <p><strong>저축 가능 기간:</strong> {{ store.userData.saving_possible_period  }}개월</p>
        <p><strong>금융 MBTI:</strong> {{ store.userData.mbti  }}</p>
        <p><strong>선택 상품:</strong> {{ store.userData.financial_products }}</p>
      </div>
      <RouterLink :to="{name: 'ProfileEditView'}">수정</RouterLink> | 
      <RouterLink :to="{name: 'PasswordEditView'}">비밀번호 변경</RouterLink>
    </div>
    <div class="profile-container" v-else>
      <h1>로딩중</h1>
    </div>
  </template>
  
  <script setup>
  import { onMounted,ref } from 'vue';
  import { useCounterStore } from '@/stores/counter';
  
  const store = useCounterStore();
  
  // 페이지 로딩 시 프로필 정보 가져오기
  onMounted(() => {
    store.getUserProfile()
    console.log("불러오기 완");
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
  