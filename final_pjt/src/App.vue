<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">홈</RouterLink>
        <RouterLink to="/exchange">환율</RouterLink>
        <RouterLink to="/bankmap">은행 지도</RouterLink>
        <RouterLink to="/financialproducts">예적금비교</RouterLink>
        <RouterLink to="/article">게시판</RouterLink>
        <div v-if="!store.isLogin">
          <RouterLink :to="{name: 'SignUpView'}">회원가입</RouterLink> | 
          <RouterLink :to="{name: 'LogInView'}">로그인</RouterLink>
        </div>
        <div v-else>
          <RouterLink :to="{name: 'ProfileView'}">프로필</RouterLink> | 
          <button @click="logOut">로그아웃</button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

</script>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav {
  width: 100%;
  height: 25px;
  font-size: 12px;
  text-align: right;
  padding: 1rem 0;
  /* margin-top: 3rem; */
  margin-right: 1rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  color: white;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }
/* 
  .logo {
    margin: 0 2rem 0 0;
  } */

  header .wrapper {
    display: flex; 
    align-items: center; 
    flex-wrap: wrap;
    justify-content: space-between;
  }

  nav {
    text-align: right;
    margin-left: 0;
    font-size: 1rem;
    width: auto;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
