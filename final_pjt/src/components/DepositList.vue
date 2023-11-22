<template>
  <div>
    <h1>예금 리스트</h1>
    <DepositListItem
      v-for="item in store.depositProducts"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import DepositListItem from '@/components/DepositListItem.vue';

const store = useCounterStore();


</script>