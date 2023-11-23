<template>
  <div>
    <!-- 프로필 컨테이너 -->
    <div class="profile-container" v-if="store.userData">
      <h1>{{ store.userData.name }}의 프로필</h1>
      <div class="profile-info">
        <p><strong>이름:</strong> {{ store.userData.name }}</p>
        <p><strong>아이디:</strong> {{ store.userData.username }}</p>
        <p><strong>나이:</strong> {{ store.userData.age }}세</p>
        <p><strong>자산:</strong> {{ store.userData.money }}원</p>
        <p>
          <strong>매달 저축 가능 금액:</strong>
          {{ store.userData.saving_possible_money }}원
        </p>
        <p>
          <strong>저축 가능 기간:</strong>
          {{ store.userData.saving_possible_period }}개월
        </p>
        <p>
          <strong>원하는 금융 상품 유형:</strong>
          {{ store.userData.financial_type }}
        </p>
        <p><strong>금융 MBTI:</strong> {{ store.userData.mbti }}</p>
      </div>
      <RouterLink :to="{ name: 'ProfileEditView' }">수정</RouterLink> |
      <RouterLink :to="{ name: 'PasswordEditView' }">비밀번호 변경</RouterLink>
    </div>

    <!-- 로딩 중 메시지 -->
    <div class="profile-container" v-else>
      <h1>로딩중</h1>
    </div>

    <!-- 선택 상품 리스트 -->
    <div
      class="selected-products-container"
      v-if="store.userData && store.userData.financial_products"
    >
      <h2 class="center">선택 상품 리스트</h2>
      <h3 class="center">예금 상품</h3>
      <div v-for="(product, index) in splitFinancialProducts" :key="index">
        <div
          v-if="
            (selectedItem = isProductInList(product, store.depositProducts))
          "
        >
          <ProfileDepositListItem
            :key="index"
            :item="selectedItem"
            :index="index"
          />
        </div>
      </div>

      <h3 class="center">적금 상품</h3>
      <div v-for="(product, index) in splitFinancialProducts" :key="index">
        <div
          v-if="(selectedItem = isProductInList(product, store.savingProducts))"
        >
          <ProfileSavinglistItem
            :key="index"
            :item="selectedItem"
            :index="index"
          />
        </div>
        <!-- <div v-else class="center">
          <p>담은 상품이 없습니다.</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useCounterStore } from "@/stores/counter";
import ProfileSavinglistItem from "@/components/ProfileSavinglistItem.vue";
import ProfileDepositListItem from "@/components/ProfileDepositListItem.vue";

const store = useCounterStore();

onMounted(() => {
  store.getUserProfile();
  console.log("불러오기 완료");
});

const splitFinancialProducts = computed(() => {
  if (store.userData && store.userData.financial_products) {
    return store.userData.financial_products
      .split(",")
      .map((item) => item.trim());
  }
  return [];
});

const isProductInList = (product, productList) => {
  for (const item of productList) {
    if (item.fin_prdt_cd === product) {
      return item;
    }
  }
  return false;
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #1e4b4c;
  font-size: 28px;
  margin-bottom: 20px;
}

.profile-info {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

strong {
  margin-right: 10px;
}

.selected-products-container h2,
.selected-products-container h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
.center {
  text-align: center;
}
</style>
