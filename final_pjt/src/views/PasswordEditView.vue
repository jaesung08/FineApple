<!-- <template>
    <div class="password-change-container">
      <h1>비밀번호 변경</h1>
      <form @submit.prevent="changePassword" class="password-change-form">
        <div class="form-group">
          <label for="currentPassword" class="form-label">현재 비밀번호:</label>
          <input v-model.trim="currentPassword" type="password" required class="form-input" />
        </div>
  
        <div class="form-group">
          <label for="newPassword" class="form-label">새 비밀번호:</label>
          <input v-model.trim="newPassword" type="password" required class="form-input" />
        </div>
  
        <div class="form-group">
          <label for="confirmPassword" class="form-label">비밀번호 확인:</label>
          <input v-model.trim="confirmPassword" type="password" required class="form-input" />
        </div>
  
        <button type="submit" class="submit-button">비밀번호 변경</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useCounterStore } from '@/stores/counter';
  
  const store = useCounterStore();
  
  const currentPassword = ref('');
  const newPassword = ref('');
  const confirmPassword = ref('');
  
  const changePassword = () => {
    // 새 비밀번호와 확인 비밀번호가 일치하는지 확인
    if (newPassword.value !== confirmPassword.value) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    // 비밀번호 변경을 위한 스토어 메서드 호출
    store.changePassword(newPassword.value, confirmPassword.value)
  };
  </script>
  
  <style scoped>
  .password-change-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    color: #1E4B4C;
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .password-change-form {
    display: grid;
    gap: 15px;
  }
  
  .form-group {
    margin-bottom: 15px;
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
  </style>
   -->
<!-- 
<template>
  <div class="password-change-container">
    <h1>비밀번호 변경</h1>
    <form @submit.prevent="changePassword" class="password-change-form">
      <div class="form-group">
        <label for="currentPassword" class="form-label">현재 비밀번호:</label>
        <input
          v-model.trim="currentPassword"
          type="password"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="newPassword" class="form-label">새 비밀번호:</label>
        <input
          v-model.trim="newPassword"
          type="password"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword" class="form-label">비밀번호 확인:</label>
        <input
          v-model.trim="confirmPassword"
          type="password"
          required
          class="form-input"
        />
      </div>

      <div class="button-container">
        <button type="submit" class="btn-submit">비밀번호 변경</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const changePassword = () => {
  // 새 비밀번호와 확인 비밀번호가 일치하는지 확인
  if (newPassword.value !== confirmPassword.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // 비밀번호 변경을 위한 스토어 메서드 호출
  store.changePassword(newPassword.value, confirmPassword.value);
};
</script>

<style scoped>
.password-change-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
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

.password-change-form {
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

.btn-submit {
  flex: 1;
}

.btn-submit {
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
}

.btn-submit:hover {
  background-color: #45a049;
}
</style> -->

<template>
  <div class="password-change-container">
    <h1>비밀번호 변경</h1>
    <form @submit.prevent="changePassword" class="password-change-form">
      <div class="form-group">
        <label for="currentPassword" class="form-label">현재 비밀번호:</label>
        <input
          v-model.trim="currentPassword"
          type="password"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="newPassword" class="form-label">새 비밀번호:</label>
        <input
          v-model.trim="newPassword"
          type="password"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword" class="form-label">비밀번호 확인:</label>
        <input
          v-model.trim="confirmPassword"
          type="password"
          required
          class="form-input"
        />
      </div>

      <div class="button-container">
        <button type="submit" class="btn-submit">비밀번호 변경</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const changePassword = () => {
  // 새 비밀번호와 확인 비밀번호가 일치하는지 확인
  if (newPassword.value !== confirmPassword.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // 비밀번호 변경을 위한 스토어 메서드 호출
  store.changePassword(newPassword.value, confirmPassword.value);
};
</script>

<style scoped>
.password-change-container {
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

.password-change-form {
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
  margin: 5px;
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
  justify-content: center; /* Center-align the button */
  margin-top: 20px;
}

.btn-submit {
  background-color: #1e4b4c; /* Theme color */
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

.btn-submit:hover {
  background-color: #45a049;
}
</style>
