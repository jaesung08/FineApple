<template>
  <div>
    <h1>적금 리스트</h1>
    <SavingListItem
      v-for="item in store.savingProducts"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import SavingListItem from "@/components/SavingListItem.vue";

const store = useCounterStore();
console.log("saving :", store.savingProducts);
</script>
