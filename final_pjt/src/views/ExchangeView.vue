<template>
  <div class="container">
    <div class="exchange-rate-container">
      <ExchangeRate />
    </div>
    <div class="exchange-rate-container">
      <ExchangeRate2 />
    </div>
  </div>
</template>

<script setup>
import ExchangeRate from "@/components/ExchangeRate.vue";
import ExchangeRate2 from "@/components/ExchangeRate2.vue";
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
import { RouterLink } from "vue-router";

const store = useCounterStore();
onMounted(() => {
  store.getExchangeRates();
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between; /* Adjust as needed */
  border: 1px solid red; /* Add a border for debugging */
}

.exchange-rate-container {
  width: 48%; /* Adjust as needed, leaving some space for margins */
  margin-bottom: 20px; /* Adjust as needed */
  border: 1px solid blue; /* Add a border for debugging */
}
</style>
