import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([])
  const userData = ref(null)
  const API_URL = 'http://127.0.0.1:8000'
  // 회원가입
  const signup = function (payload) {
    const { username, password1, password2, age, money, salary, nickname } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, password1, password2, age, money, salary, nickname
      }
    }).then(res => {
      console.log('회원가입이 완료되었습니다.');
      console.log(res)
      const password = password1
      logIn({ username, password })
    }).catch(err => console.error(err.response.data))
  }
  // 로그인 시 토큰 저장
  const token = ref(null)

  // 로그인
  const logIn = function (payload) {
    const { username, password } = payload
    
    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data:{
        username, password
      }
    }) .then(res => {
      console.log('로그인이 완료되었습니다');
      console.log(res);
      token.value = res.data.key
      router.push({ name:'home'})
      console.log("완료");

    }) .catch(err => console.log(err.response.data))
  }

  // 로그인되있는지 확인
  const isLogin = computed(() => {
    if (token.value === null) {
      return false
    } else {
      return true
    }
  })


  const getUserProfile = function() {
    axios({
      method: 'get',
      url: `${API_URL}/accounts/user/`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    })
    .then((response) => {
      console.log('유저 프로필 조회 결과:', response.data);
      // 여기서 받아온 프로필 정보를 활용하면 됩니다.
      userData.value = response.data

    })
    .catch((error) => {
      console.log('유저 프로필 조회 실패:', error.response.data);
    });
  }

  const logOut = async () => {
    await axios({
      method: 'post',  // 로그아웃은 보통 POST 요청으로 수행됩니다.
      url: `${API_URL}/accounts/logout/`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    }).then(() => {
      store.token = null; // 토큰 초기화
      router.push({ name: 'Home' }); // 로그아웃 후 홈으로 리다이렉트
    }).catch(error => console.error(error));
  };
  


  // DRF에 article 조회 요청을 보내는 action
  const getArticles = function() {
    axios({
      method: 'get',
      url: `${API_URL}/articles/`
    })
    .then((response) => {
      // console.log(response)
      articles.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
  const exchangeRates = ref([])
    // DRF에 환율 조회 요청을 보내는 action
  const getExchangeRates = function() {
    axios({
      method: 'get',
      url: `${API_URL}/exchange/`
    })
    .then((response) => {
      // console.log(response)
      exchangeRates.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
  const savingProducts = ref([])
  // DRF에 적금정보 조회 요청을 보내는 action
const getSavingProducts = function() {
  axios({
    method: 'get',
    url: `${API_URL}/financial/saving_products/`
  })
  .then((response) => {
    // console.log(response.data)
    savingProducts.value = response.data
    console.log(savingProducts.value)
  })
  .catch((error) => {
    console.log(error)
  })
}

const depositProducts = ref([])
// DRF에 예금정보 조회 요청을 보내는 action
const getDepositProducts = function() {
axios({
  method: 'get',
  url: `${API_URL}/financial/deposit_products/`
})
.then((response) => {
  // console.log(response.data)
  depositProducts.value = response.data
  console.log(depositProducts.value)
})
.catch((error) => {
  console.log(error)
})
}


  return { signup, logIn, getUserProfile, isLogin, logOut, userData, token, articles, exchangeRates, savingProducts, depositProducts, API_URL, getArticles, getExchangeRates, getSavingProducts, getDepositProducts }
}, { persist: true })