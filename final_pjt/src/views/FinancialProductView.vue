<!-- <template>
  <div class="container">
    <h1>내 조건에 맞는 상품 찾기</h1>
    <form action="" class="center" @submit.prevent="handleSubmit">
      <div class="select-wrapper">
        <select name="은행" id="bank" v-model="bank">
          <option value="국민은행">국민은행</option>
          <option value="우리은행">우리은행</option>
          <option value="신한은행">신한은행</option>
          <option value="하나은행">하나은행</option>
          <option value="한국스탠다드차타드은행">한국스탠다드차타드은행</option>
          <option value="한국산업은행">한국산업은행</option>
          <option value="농협은행주식회사">농협은행주식회사</option>
          <option value="주식회사 케이뱅크">주식회사 케이뱅크</option>
          <option value="주식회사 카카오뱅크">주식회사 카카오뱅크</option>
          <option value="토스뱅크 주식회사">토스뱅크 주식회사</option>
          <option value="중소기업은행">중소기업은행</option>
          <option value="부산은행">부산은행</option>
          <option value="대구은행">대구은행</option>
          <option value="광주은행">광주은행</option>
          <option value="경남은행">경남은행</option>
          <option value="전북은행">전북은행</option>
          <option value="제주은행">제주은행</option>
          <option value="수협은행">수협은행</option>
        </select>
      </div>
      <div class="select-wrapper">
        <select name="예치기간" id="term" v-model="term">
          <option value="6">6개월</option>
          <option value="12">12개월</option>
          <option value="24">24개월</option>
          <option value="36">36개월</option>
        </select>
      </div>
      <button type="submit" class="submit-button">찾기</button>
    </form>

    <div class="table-container">
      <table class="styled-table">
        <tr v-for="item in filteredDepositList">
          <td class="label">
            {{ item.id }}
          </td>
          <td class="bank">
            {{ item.kor_co_nm }}
          </td>
          <td class="product">
            <span @click="toggleDetails">{{ item.fin_prdt_nm }}</span>
          </td>

          <td class="option1">
            <p>
              {{
                options
                  .filter((option) => option.fin_prdt_cd === item.fin_prdt_cd)
                  .filter((option) => option.save_trm === 6)[0]
                  ? options
                      .filter(
                        (option) => option.fin_prdt_cd === item.fin_prdt_cd
                      )
                      .filter((option) => option.save_trm === 6)[0].intr_rate
                  : "-"
              }}
            </p>
          </td>
          <td class="option2">
            <p>
              {{
                options
                  .filter((option) => option.fin_prdt_cd === item.fin_prdt_cd)
                  .filter((option) => option.save_trm === 12)[0]
                  ? options
                      .filter(
                        (option) => option.fin_prdt_cd === item.fin_prdt_cd
                      )
                      .filter((option) => option.save_trm === 12)[0].intr_rate
                  : "-"
              }}
            </p>
          </td>
          <td class="option3">
            <p>
              {{
                options
                  .filter((option) => option.fin_prdt_cd === item.fin_prdt_cd)
                  .filter((option) => option.save_trm === 24)[0]
                  ? options
                      .filter(
                        (option) => option.fin_prdt_cd === item.fin_prdt_cd
                      )
                      .filter((option) => option.save_trm === 24)[0].intr_rate
                  : "-"
              }}
            </p>
          </td>
          <td class="option4">
            <p>
              {{
                options
                  .filter((option) => option.fin_prdt_cd === item.fin_prdt_cd)
                  .filter((option) => option.save_trm === 36)[0]
                  ? options
                      .filter(
                        (option) => option.fin_prdt_cd === item.fin_prdt_cd
                      )
                      .filter((option) => option.save_trm === 36)[0].intr_rate
                  : "-"
              }}
            </p>
          </td>
        </tr>
      </table>
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
    </div>
    <div class="box-container">
      <h2>세부정보</h2>
      <div class="box deposit-box">
        <RouterLink :to="{ name: 'depositlist' }"><h3>예금상품</h3></RouterLink>
      </div>
      <div class="box saving-box">
        <RouterLink :to="{ name: 'savinglist' }"><h3>적금상품</h3></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { RouterLink } from "vue-router";
import DepositList from "../components/DepositList.vue";
import SavingList from "../components/SavingList.vue";
import DepositListItem from "../components/DepositListItem.vue";
import SavingListItem from "../components/SavingListItem.vue";

const store = useCounterStore();

const filteredDepositList = ref([]);
const filteredSavingList = ref([]);

const bank = ref(null);
const term = ref(null);

onMounted(() => {
  store.getDepositProducts();
  store.getSavingProducts();
});
defineProps({
  item: Object,
});
const filterData = (data) => {
  console.log(data);
  const data2 = data.filter((d) => d.kor_co_nm === bank.value);
  // // const data3 = data2.filter(
  // //   (d) =>
  // //     d.fin_prdt_cd === options.fin_prdt_cd &&
  // //     options.save_trm === term.value
  // // );
  // console.log(data3);
  // return data3;
  return data2;
};

const filterLists = () => {
  // 선택된 은행과 예치기간에 따라 필터링
  filteredDepositList.value = filterData(store.depositProducts);
  filteredSavingList.value = filterData(store.savingProducts);
};

const handleSubmit = () => {
  // 선택된 값에 따라 DepositList와 SavingList 필터링
  filterLists();
};

const showDetails = ref(false);

const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};

const options = ref([]);
options.value = store.depositProductsOptions;
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
  background-color: #f2f9f9; /* Light background color */
}

.center {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Adjust the gap as needed */
  margin: 20px;
}

.select-wrapper {
  flex: 1; /* Distribute available space equally between select elements */
}

.submit-button {
  padding: 12px 20px;
  font-size: 16px;
  background-color: rgb(0, 75, 76); /* Accent color */
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #00585b; /* Darker shade on hover */
}

.box-container {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adjust the gap between boxes */
  margin: 20px;
  padding: 20px;
  border-radius: 5%;
  position: fixed;
  left: 0;
  background-color: #00585b;
}

.box {
  flex: 1;
  padding: 1px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.deposit-box {
  background-color: white; /* Accent color */
  color: black;
}

.saving-box {
  background-color: white; /* Accent color */
  color: black;
}

.box:hover {
  background-color: #00585b; /* Darker shade on hover */
  color: #fff;
}

.link-wrapper {
  margin-top: 20px; /* Add margin to separate the links from the form */
}

.link-wrapper RouterLink {
  margin-right: 10px; /* Add space between the links */
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.3s ease;
}

.link-wrapper RouterLink:hover {
  color: rgb(0, 75, 76); /* Accent color on hover */
}
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
.td1 {
  font-weight: bold;
  width: 25%;
}

.td2 {
}
.details-label {
  font-weight: bold;
  width: 30%;
}
</style> -->

<template>
  <div class="container">
    <h1>내 조건에 맞는 상품 찾기</h1>
    <form action="" class="center" @submit.prevent="handleSubmit">
      <div class="select-wrapper">
        <select name="은행" id="bank" v-model="bank">
          <option value="국민은행">국민은행</option>
          <option value="우리은행">우리은행</option>
          <option value="신한은행">신한은행</option>
          <option value="하나은행">하나은행</option>
          <option value="한국스탠다드차타드은행">한국스탠다드차타드은행</option>
          <option value="한국산업은행">한국산업은행</option>
          <option value="농협은행주식회사">농협은행주식회사</option>
          <option value="주식회사 케이뱅크">주식회사 케이뱅크</option>
          <option value="주식회사 카카오뱅크">주식회사 카카오뱅크</option>
          <option value="토스뱅크 주식회사">토스뱅크 주식회사</option>
          <option value="중소기업은행">중소기업은행</option>
          <option value="부산은행">부산은행</option>
          <option value="대구은행">대구은행</option>
          <option value="광주은행">광주은행</option>
          <option value="경남은행">경남은행</option>
          <option value="전북은행">전북은행</option>
          <option value="제주은행">제주은행</option>
          <option value="수협은행">수협은행</option>
        </select>
      </div>
      <div class="select-wrapper">
        <select name="예치기간" id="term" v-model="term">
          <option value="6">6개월</option>
          <option value="12">12개월</option>
          <option value="24">24개월</option>
          <option value="36">36개월</option>
        </select>
      </div>
      <button type="submit" class="submit-button">찾기</button>
    </form>

    <div class="table-container">
      <table class="styled-table">
        <tr v-for="item in filteredDepositList">
          <td class="label">
            {{ item.id }}
          </td>
          <td class="bank">
            {{ item.kor_co_nm }}
          </td>
          <td class="product">
            <span @click="toggleDetails">{{ item.fin_prdt_nm }}</span>
          </td>

          <td class="option1">
            <p>
              {{
                options
                  .filter((option) => option.fin_prdt_cd === item.fin_prdt_cd)
                  .filter((option) => option.save_trm === 6)[0]
                  ? options
                      .filter(
                        (option) => option.fin_prdt_cd === item.fin_prdt_cd
                      )
                      .filter((option) => option.save_trm === 6)[0].intr_rate
                  : "-"
              }}
            </p>
          </td>
          <td class="option2">
            <p>
              {{
                options
                  .filter((option) => option.fin_prdt_cd === item.fin_prdt_cd)
                  .filter((option) => option.save_trm === 12)[0]
                  ? options
                      .filter(
                        (option) => option.fin_prdt_cd === item.fin_prdt_cd
                      )
                      .filter((option) => option.save_trm === 12)[0].intr_rate
                  : "-"
              }}
            </p>
          </td>
          <td class="option3">
            <p>
              {{
                options
                  .filter((option) => option.fin_prdt_cd === item.fin_prdt_cd)
                  .filter((option) => option.save_trm === 24)[0]
                  ? options
                      .filter(
                        (option) => option.fin_prdt_cd === item.fin_prdt_cd
                      )
                      .filter((option) => option.save_trm === 24)[0].intr_rate
                  : "-"
              }}
            </p>
          </td>
          <td class="option4">
            <p>
              {{
                options
                  .filter((option) => option.fin_prdt_cd === item.fin_prdt_cd)
                  .filter((option) => option.save_trm === 36)[0]
                  ? options
                      .filter(
                        (option) => option.fin_prdt_cd === item.fin_prdt_cd
                      )
                      .filter((option) => option.save_trm === 36)[0].intr_rate
                  : "-"
              }}
            </p>
          </td>
        </tr>
      </table>
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
    </div>
    <div class="box-container">
      <div class="box deposit-box">
        <RouterLink :to="{ name: 'depositlist' }"
          ><h3>모든<br />예금<br />상품</h3></RouterLink
        >
      </div>
      <div class="box saving-box">
        <RouterLink :to="{ name: 'savinglist' }"
          ><h3>모든<br />적금<br />상품</h3></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { RouterLink } from "vue-router";
import DepositList from "../components/DepositList.vue";
import SavingList from "../components/SavingList.vue";
import DepositListItem from "../components/DepositListItem.vue";
import SavingListItem from "../components/SavingListItem.vue";

const store = useCounterStore();

const filteredDepositList = ref([]);
const filteredSavingList = ref([]);

const bank = ref(null);
const term = ref(null);

onMounted(() => {
  store.getDepositProducts();
  store.getSavingProducts();
});
defineProps({
  item: Object,
});
const filterData = (data) => {
  console.log(data);
  const data2 = data.filter((d) => d.kor_co_nm === bank.value);
  // // const data3 = data2.filter(
  // //   (d) =>
  // //     d.fin_prdt_cd === options.fin_prdt_cd &&
  // //     options.save_trm === term.value
  // // );
  // console.log(data3);
  // return data3;
  return data2;
};

const filterLists = () => {
  // 선택된 은행과 예치기간에 따라 필터링
  filteredDepositList.value = filterData(store.depositProducts);
  filteredSavingList.value = filterData(store.savingProducts);
};

const handleSubmit = () => {
  // 선택된 값에 따라 DepositList와 SavingList 필터링
  filterLists();
};

const showDetails = ref(false);

const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};

const options = ref([]);
options.value = store.depositProductsOptions;
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
  background-color: #f2f9f9; /* Light background color */
}

.center {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Adjust the gap as needed */
  margin: 20px;
}

.select-wrapper {
  flex: 1; /* Distribute available space equally between select elements */
}

.submit-button {
  padding: 12px 20px;
  font-size: 16px;
  background-color: rgb(0, 75, 76); /* Accent color */
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #00585b; /* Darker shade on hover */
}

.box-container {
  /* display: flex;
  flex-direction: column;
  gap: 10px;
  height: 30%;
  margin: 100px 20px 100px 0px;
  padding: 10px 10px 150px 10px;
  border-radius: 0px 5px 5px 0px;  */
  position: fixed;
  left: 0;
  /*top: 2%;
  background-color: none;
  color: white; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  */
}

.box {
  flex: 1;
  padding: 5px; /* 여백 추가 */
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 0 10px 10px 0;
  width: 100%;
  /* writing-mode: vertical-lr; 
  text-orientation: upright;  */
}

.deposit-box {
  background-color: rgb(0, 75, 76); /* 흰색 배경 */
  color: white; /* 배경과 대조되는 텍스트 색상 */
  margin-bottom: 20px;
}

.saving-box {
  background-color: rgb(0, 75, 76); /* 흰색 배경 */
  color: white; /* 배경과 대조되는 텍스트 색상 */
}
.box:hover {
  background-color: #00585b; /* Darker shade on hover */
  color: #fff;
}

.link-wrapper {
  margin-top: 20px; /* Add margin to separate the links from the form */
}

.link-wrapper RouterLink {
  margin-right: 10px; /* Add space between the links */
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.3s ease;
}

.link-wrapper RouterLink:hover {
  color: rgb(0, 75, 76); /* Accent color on hover */
}
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
.td1 {
  font-weight: bold;
  width: 25%;
}

.td2 {
}
.details-label {
  font-weight: bold;
  width: 30%;
}
</style>
