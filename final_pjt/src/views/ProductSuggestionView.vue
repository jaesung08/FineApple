<template>
    <div>
        <h1>{{ store.userData.name }}님의 추천 금융 상품</h1>
        <p>{{ store.userData.name }}님의 FMTI를 기반으로 고객님과 유사한 FMTI를 가진 사람들이 선택한 상품들입니다.</p>
    </div>
<div>
    <div>
    <h2 class="center">추천 상품 리스트</h2>
      <h3 class="center">예금 상품</h3>
      <div v-for="(product, index) in depositList" :key="product.id">
        <ProfileDepositListItem 
        :item="product" 
        :idx="index + 1" />
      </div>


      <h3 class="center">적금 상품</h3>
      <div v-for="(product, index) in savingList" :key="product.id">
          <ProfileSavinglistItem 
          :item="product" 
          :idx="index+1" />
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

const userMbti = ref(store.userData.mbti)
console.log(userMbti.value);


const productList = store.getProductByMbti()

const depositList = computed(() => {
  const productList = store.recommendedProduct
  return store.depositProducts.filter((ele) => {
    return productList.find((product) => product === ele.fin_prdt_cd)
  })
})

const savingList = computed(() => {
  const productList = store.recommendedProduct
  return store.savingProducts.filter((ele) => {
    return productList.find((product) => product === ele.fin_prdt_cd)
  })
})
</script>

<style scoped>

</style>