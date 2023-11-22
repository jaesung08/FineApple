<template>
    <div class="table-container">
      <table class="styled-table">
        <tr>
          <td class="label">
            {{ item.id }}
          </td>
          <td class="bank">
            {{ item.kor_co_nm }}
          </td>
          <td class="product">
            <span @click="toggleDetails">{{ item.fin_prdt_nm }}</span>
          </td>
          <td class="bank">
          </td>
        <td class="option1">
          <p> {{ options.filter(option => option.fin_prdt_cd === item.fin_prdt_cd).filter(option => option.save_trm === 6)[0] ? options.filter(option => option.fin_prdt_cd === item.fin_prdt_cd).filter(option => option.save_trm === 6)[0].intr_rate : '-' }}</p>
        </td>
        <td class="option2">
          <p> {{ options.filter(option => option.fin_prdt_cd === item.fin_prdt_cd).filter(option => option.save_trm === 12)[0] ? options.filter(option => option.fin_prdt_cd === item.fin_prdt_cd).filter(option => option.save_trm === 12)[0].intr_rate : '-' }}</p>
        </td>
        <td class="option3">
          <p> {{ options.filter(option => option.fin_prdt_cd === item.fin_prdt_cd).filter(option => option.save_trm === 24)[0] ? options.filter(option => option.fin_prdt_cd === item.fin_prdt_cd).filter(option => option.save_trm === 24)[0].intr_rate : '-' }}</p>
        </td>
        <td class="option4">
          <p> {{ options.filter(option => option.fin_prdt_cd === item.fin_prdt_cd).filter(option => option.save_trm === 36)[0] ? options.filter(option => option.fin_prdt_cd === item.fin_prdt_cd).filter(option => option.save_trm === 36)[0].intr_rate : '-' }}</p>
        </td>
        </tr>
        <tr v-if="showDetails">
  <td colspan="12">
    <table class="details-table">
      <tr>
        <td class="td1">금융상품설명</td>
        <td>{{ item.etc_note }}</td>
      </tr>
      <tr>
        <td class="td1">가입제한</td>
        <td>{{ item.join_deny }}</td>
      </tr>
      <tr>
        <td class="td1">가입대상</td>
        <td>{{ item.join_member }}</td>
      </tr>
      <tr>
        <td class="td1">가입방법</td>
        <td>{{ item.join_way }}</td>
      </tr>
      <tr>
        <td class="td1">우대조건</td>
        <td>{{ item.spcl_cnd }}</td>
      </tr>
      <tr>
        <td class="td1">만기후이자율</td>
        <td>{{ item.mtrt_int }}</td>
      </tr>
      <tr>
        <td class="td1">최고한도</td>
        <td>{{ item.max_limit }}</td>
      </tr>
    </table>
  </td>
</tr>

  
        <!-- <tr v-if="showDetails">
          <td></td>
          <td class="details">
            {{ item.etc_note }}
            {{ item.join_deny }}
            {{ item.join_member }}
            {{ item.join_way }}
            {{ item.spcl_cnd }}
            {{ item.mtrt_int }}
            {{ item.max_limit }}
          </td>
        </tr> -->
        
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
  
  const showDetails = ref(false)
  
  const toggleDetails = () => {
    showDetails.value = !showDetails.value
  }
  
  defineProps({
    item: Object
  })

  const options = ref([])
options.value = store.savingProductsOptions
  </script>
  
  <style scoped>
  .table-container {
    max-width: 600px;
    margin: auto;
  }
  
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .styled-table tr {
    border-bottom: 1px solid #ddd;
  }
  
  .styled-table td {
    padding: 12px;
    text-align: left;
  }
  
  .styled-table td.label {
    font-weight: bold;
    width: 15%;
  }
  .styled-table td.bank {
    
    width: 40%;
  }
  
  .styled-table td.product {
    font-weight: bold;
    width: 70%;
    white-space: nowrap; /* Prevent line breaks */
    overflow: hidden; /* Hide overflowing content */
    text-overflow: ellipsis; /* Display ellipsis (...) for overflow */
  }

.details-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  .details-table td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background-color: white;
  }
  .td1{
    font-weight: bold;
    width: 25%;
  }
  
  .td2{
    
  }
  .details-label {
    font-weight: bold;
    width: 30%;
  }
  </style>
  
