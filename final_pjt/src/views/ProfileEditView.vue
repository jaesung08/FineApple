<!-- <template> 
    <div class="profile-update-container">
      <h1>프로필 정보 수정</h1>
      <form @submit.prevent="editProfile" class="profile-update-form">
        <label for="username" class="form-label">
          이름:
        </label>
          <input v-model.trim="name" disabled class="form-input" />
        
  
        <label for="age" class="form-label">
          나이:
          <input v-model.trim="age" type="number" required class="form-input" />
        </label>
  
        <label for="money" class="form-label">
          자산:
          <input v-model.trim="money" type="number" required class="form-input" />
        </label>
  
        <label for="saving_possible_money" class="form-label">
          매달 저축 가능 금액:
          <input v-model.trim="saving_possible_money" type="number" required class="form-input" />
        </label>
  
        <label for="saving_possible_period" class="form-label">
          저축 가능 기간: (개월)
          <input v-model.trim="saving_possible_period" type="number" required class="form-input" />
        </label>
  
        
        <label for="mbti" class="form-label">
          금융 MBTI:
          <input v-model.trim="mbti" class="form-input" />
        </label>
  
        <label for="financial_products" class="form-label">
          선택 상품:
          <input v-model.trim="financial_products" disabled class="form-input" />
        </label>
       
  
        <input type="submit" value="프로필 수정" class="submit-button" />
      </form>
      <button @click="withdrawMembership" class="withdraw-button">회원 탈퇴</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useCounterStore } from '@/stores/counter';
import router from '@/router';
  
  
  const store = useCounterStore();

  const name = (store.userData.name) // 이름은 수정 불가능
  const age = ref(store.userData.age)
  const money = ref(store.userData.money)
  const saving_possible_money = ref(store.userData.saving_possible_money)
  const saving_possible_period = ref(store.userData.saving_possible_period)


  
  const editProfile = function () {
    const editedProfile = {
    age: age.value,
    money: money.value,
    saving_possible_money: saving_possible_money.value,
    saving_possible_period: saving_possible_period.value,
    // mbti: store.userData.mbti,
    // financial_products: store.userData.financial_products, // 선택 상품은 수정 불가능
  }

  store.updateProfile(editedProfile)
};
  
  
const withdrawMembership = () => {
  if (confirm('정말로 회원 탈퇴하시겠습니까?')) {
    // 회원 탈퇴를 처리하기 위해 DELETE 요청을 보냄
    store.withdrawMembership() 
  }
};
  

  </script>
  
  <style scoped>
  .profile-update-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    color: #1E4B4C;
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .profile-update-form {
    display: grid;
    gap: 15px;
  }
  
  .form-label {
    display: block;
    font-size: 16px;
    color: #333;
  }
  
  .form-input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
  }
  
  .submit-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }

  .withdraw-button {
  background-color: #e74c3c;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}
  </style> -->

<!-- 
<template>
  <div class="profile-update-container">
    <h1>프로필 정보 수정</h1>
    <form @submit.prevent="editProfile" class="profile-update-form">
      <label for="username" class="form-label"> 이름: </label>
      <input v-model.trim="name" disabled class="form-input" />

      <label for="age" class="form-label">
        나이:
        <input v-model.trim="age" type="number" required class="form-input" />
      </label>

      <label for="money" class="form-label">
        자산:
        <input v-model.trim="money" type="number" required class="form-input" />
      </label>

      <label for="saving_possible_money" class="form-label">
        매달 저축 가능 금액:
        <input
          v-model.trim="saving_possible_money"
          type="number"
          required
          class="form-input"
        />
      </label>

      <label for="saving_possible_period" class="form-label">
        저축 가능 기간: (개월)
        <input
          v-model.trim="saving_possible_period"
          type="number"
          required
          class="form-input"
        />
      </label>

      <input type="submit" value="프로필 수정" class="submit-button" />
    </form>
    <button @click="withdrawMembership" class="withdraw-button">
      회원 탈퇴
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import router from "@/router";

const store = useCounterStore();

const name = store.userData.name; // 이름은 수정 불가능
const age = ref(store.userData.age);
const money = ref(store.userData.money);
const saving_possible_money = ref(store.userData.saving_possible_money);
const saving_possible_period = ref(store.userData.saving_possible_period);

const editProfile = function () {
  const editedProfile = {
    age: age.value,
    money: money.value,
    saving_possible_money: saving_possible_money.value,
    saving_possible_period: saving_possible_period.value,
    // mbti: store.userData.mbti,
    // financial_products: store.userData.financial_products, // 선택 상품은 수정 불가능
  };

  store.updateProfile(editedProfile);
};

const withdrawMembership = () => {
  if (confirm("정말로 회원 탈퇴하시겠습니까?")) {
    // 회원 탈퇴를 처리하기 위해 DELETE 요청을 보냄
    store.withdrawMembership();
  }
};
</script>
<style scoped>
.profile-update-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #1e4b4c;
  font-size: 28px;
  margin-bottom: 20px;
}

.profile-update-form {
  display: grid;
  gap: 15px;
}

.form-label {
  display: block;
  font-size: 16px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button,
.withdraw-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.submit-button:hover,
.withdraw-button:hover {
  background-color: #45a049;
}
</style>  -->
<template>
  <div class="profile-update-container">
    <h1>프로필 정보 수정</h1>
    <form @submit.prevent="editProfile" class="profile-update-form">
      <div class="form-group">
        <label for="username" class="form-label">이름:</label>
        <div class="form-text">{{ name }}</div>
      </div>

      <div class="form-group">
        <label for="age" class="form-label">나이:</label>
        <input v-model.trim="age" type="number" required class="form-input" />
      </div>

      <div class="form-group">
        <label for="money" class="form-label">자산:</label>
        <input v-model.trim="money" type="number" required class="form-input" />
      </div>

      <div class="form-group">
        <label for="saving_possible_money" class="form-label"
          >매달 저축 가능 금액:</label
        >
        <input
          v-model.trim="saving_possible_money"
          type="number"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="saving_possible_period" class="form-label"
          >저축 가능 기간: (개월)</label
        >
        <input
          v-model.trim="saving_possible_period"
          type="number"
          required
          class="form-input"
        />
      </div>
      <div class="button-container">
        <button type="submit" class="btn-submit">프로필 수정</button>
        <button @click="withdrawMembership" class="btn-withdraw">
          회원 탈퇴
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import router from "@/router";

const store = useCounterStore();

const name = store.userData.name;
const age = ref(store.userData.age);
const money = ref(store.userData.money);
const saving_possible_money = ref(store.userData.saving_possible_money);
const saving_possible_period = ref(store.userData.saving_possible_period);

const editProfile = function () {
  const editedProfile = {
    age: age.value,
    money: money.value,
    saving_possible_money: saving_possible_money.value,
    saving_possible_period: saving_possible_period.value,
  };

  store.updateProfile(editedProfile);
};

const withdrawMembership = () => {
  if (confirm("정말로 회원 탈퇴하시겠습니까?")) {
    store.withdrawMembership();
  }
};
</script>

<style scoped>
.profile-update-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 100px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #1e4b4c;
  font-size: 24px;
  margin-bottom: 20px;
}

.profile-update-form {
  display: grid;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}

.form-text {
  font-size: 16px;
  margin-bottom: 10px;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-submit,
.btn-withdraw {
  flex: 1;
  margin-right: 10px;
}

.btn-submit:hover,
.btn-withdraw:hover {
  background-color: red;
}
</style>
