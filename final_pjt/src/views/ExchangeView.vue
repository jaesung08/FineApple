<template>
  <div class="container">
    <button @click="toggleCalculator">🍎</button>
    <div
      v-if="currentCalculator === 'calculator1'"
      class="calculator-container"
    >
      <Calculator1 />
    </div>
    <div v-else class="calculator-container">
      <Calculator2 />
    </div>
  </div>
</template>

<script setup>
import Calculator1 from "@/components/ExchangeRate.vue";
import Calculator2 from "@/components/ExchangeRate2.vue";
import { ref } from "vue";

const currentCalculator = ref("calculator1");

const toggleCalculator = () => {
  currentCalculator.value =
    currentCalculator.value === "calculator1" ? "calculator2" : "calculator1";
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.calculator-container {
  width: 70%; /* Adjust the width as needed */
  box-sizing: border-box;
  margin: 10px; /* Add margin for spacing */
}

</style>