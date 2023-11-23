<template>
  <div>
    <ExchangeRate />
    <ExchangeRate2 />
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

<style scoped></style>
