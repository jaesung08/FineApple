<!-- <template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">홈</RouterLink>
        <RouterLink to="/exchange">환율</RouterLink>
        <RouterLink to="/bankmap">은행 지도</RouterLink>
        <RouterLink to="/bankmap2">은행 지도2</RouterLink>
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

const logOut = store.logOut
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
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/') }"
          to="/"
          >홈</RouterLink
        >
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/exchange') }"
          to="/exchange"
          >환율</RouterLink
        >
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/bankmap') }"
          to="/bankmap"
          >은행 지도</RouterLink
        >
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/bankmap2') }"
          to="/bankmap2"
          >은행 지도2</RouterLink
        >
        <RouterLink
          :class="{
            'router-link-exact-active': isActive('/financialproducts'),
          }"
          to="/financialproducts"
          >예적금비교</RouterLink
        >
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/article') }"
          to="/article"
          >게시판</RouterLink
        >
        <div class="auth-buttons">
          <div v-if="!store.isLogin">
            <RouterLink :to="{ name: 'SignUpView' }" class="auth-button"
              >회원가입</RouterLink
            >
            <RouterLink :to="{ name: 'LogInView' }" class="auth-button"
              >로그인</RouterLink
            >
          </div>
          <div v-else>
            <RouterLink :to="{ name: 'ProfileView' }" class="auth-button"
              >프로필</RouterLink
            >
            <button @click="logOut" class="auth-button">로그아웃</button>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { useRoute } from "vue-router";

const store = useCounterStore();
const route = useRoute();

const logOut = store.logOut;

const isActive = (path) => route.path === path;
</script>

<style scoped>
/* 나머지 스타일들은 그대로 유지 */

.auth-buttons {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.auth-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 12px; /* 적절한 폰트 크기로 조절 */
  margin-right: 10px; /* 각 버튼 간격 조절 */
  border: 1px solid white; /* 테두리 추가 */
  border-radius: 5px; /* 둥근 테두리 적용 */
  color: white;
  text-decoration: none;
}

.auth-button:hover {
  background-color: rgba(255, 255, 255, 0.1); /* 마우스 오버 시 배경색 변경 */
}
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="auth-buttons">
          <div v-if="!store.isLogin">
            <RouterLink :to="{ name: 'SignUpView' }" class="auth-button"
              >회원가입</RouterLink
            >
            <RouterLink :to="{ name: 'LogInView' }" class="auth-button"
              >로그인</RouterLink
            >
          </div>
          <div v-else>
            <RouterLink :to="{ name: 'ProfileView' }" class="auth-button"
              >프로필</RouterLink
            >
            <button @click="logOut" class="auth-button">로그아웃</button>
          </div>
        </div>
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/') }"
          to="/"
          >홈</RouterLink
        >
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/exchange') }"
          to="/exchange"
          >환율</RouterLink
        >
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/bankmap') }"
          to="/bankmap"
          >은행 지도</RouterLink
        >
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/bankmap2') }"
          to="/bankmap2"
          >은행 지도2</RouterLink
        >
        <RouterLink
          :class="{
            'router-link-exact-active': isActive('/financialproducts'),
          }"
          to="/financialproducts"
          >예적금비교</RouterLink
        >
        <RouterLink
          :class="{ 'router-link-exact-active': isActive('/article') }"
          to="/article"
          >게시판</RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { useRoute } from "vue-router";

const store = useCounterStore();
const route = useRoute();

const logOut = store.logOut;

const isActive = (path) => route.path === path;
</script>

<style scoped>
/* 나머지 스타일들은 그대로 유지 */

nav {
  /* ... */
  margin-right: 1rem;
}

nav a {
  /* ... */
  margin-right: 10px; /* 각 버튼 간격 조절 */
}

.auth-buttons {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: auto; /* 가장 오른쪽으로 이동 */
}

.auth-button {
  /* ... */
  margin-right: 10px; /* 각 버튼 간격 조절 */
  border-color: white; /* 테두리 색상 조절 */
}

.auth-button:hover {
  /* ... */
  background-color: rgba(255, 255, 255, 0.1);
}
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ path: '/', exact: true }">홈</RouterLink>
        <RouterLink to="/exchange">환율</RouterLink>
        <RouterLink to="/bankmap">은행 지도</RouterLink>
        <RouterLink to="/bankmap2">은행 지도2</RouterLink>
        <RouterLink to="/financialproducts">예적금비교</RouterLink>
        <RouterLink to="/article">게시판</RouterLink>
        <div v-if="!store.isLogin">
          <RouterLink :to="{ name: 'SignUpView' }">회원가입</RouterLink> |
          <RouterLink :to="{ name: 'LogInView' }">로그인</RouterLink>
        </div>
        <div v-else>
          <RouterLink :to="{ name: 'ProfileView' }">프로필</RouterLink> |
          <button @click="logOut">로그아웃</button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

nav {
  width: 100%;
  height: 25px;
  font-size: 12px;
  text-align: right;
  padding: 1rem 0;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  color: white;
}

nav a.router-link-exact-active {
  /* router-link-exact-active 클래스에 대한 스타일을 변경하지 않도록 비워둡니다. */
}

nav a.router-link-exact-active:hover {
  /* router-link-exact-active 클래스에 대한 호버 스타일을 변경하지 않도록 비워둡니다. */
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
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ path: '/', exact: true }">홈</RouterLink>
        <RouterLink to="/exchange">환율</RouterLink>
        <RouterLink to="/bankmap">은행 지도</RouterLink>
        <RouterLink to="/bankmap2">은행 지도2</RouterLink>
        <RouterLink to="/financialproducts">예적금비교</RouterLink>
        <RouterLink to="/article">게시판</RouterLink>
        <div v-if="!store.isLogin">
          <RouterLink :to="{ name: 'SignUpView' }">회원가입</RouterLink> |
          <RouterLink :to="{ name: 'LogInView' }">로그인</RouterLink>
        </div>
        <div v-else>
          <RouterLink :to="{ name: 'ProfileView' }">프로필</RouterLink> |
          <button @click="logOut">로그아웃</button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

nav {
  width: 100%;
  height: 25px;
  font-size: 12px;
  text-align: right;
  padding: 1rem 0;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  color: white;
}

nav a.router-link-exact-active {
  /* router-link-exact-active 클래스에 대한 스타일을 변경하지 않도록 비워둡니다. */
}

nav a.router-link-exact-active:hover {
  /* router-link-exact-active 클래스에 대한 호버 스타일을 변경하지 않도록 비워둡니다. */
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
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ path: '/', exact: true }">홈</RouterLink>
        <RouterLink to="/exchange">환율</RouterLink>
        <RouterLink to="/bankmap">은행 지도</RouterLink>
        <RouterLink to="/bankmap2">은행 지도2</RouterLink>
        <RouterLink to="/financialproducts">예적금비교</RouterLink>
        <RouterLink to="/article">게시판</RouterLink>
        <div v-if="!store.isLogin" class="nav-buttons">
          <RouterLink :to="{ name: 'SignUpView' }" class="nav-button"
            >회원가입</RouterLink
          >
          |
          <RouterLink :to="{ name: 'LogInView' }" class="nav-button"
            >로그인</RouterLink
          >
        </div>
        <div v-else class="nav-buttons">
          <RouterLink :to="{ name: 'ProfileView' }" class="nav-button"
            >프로필</RouterLink
          >
          |
          <button @click="logOut" class="nav-button">로그아웃</button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: right;
  padding: 1rem 0;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
  color: white;
}

nav a.router-link-exact-active,
nav .nav-button {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active:hover,
nav .nav-button:hover {
  /* 호버 시 스타일을 변경합니다. */
  background-color: rgba(255, 255, 255, 0.1);
}

nav a {
  display: inline-block;
}

nav a:first-of-type,
nav .nav-buttons {
  border: 0;
  display: flex;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  nav {
    text-align: right;
    margin-left: 0;
    width: auto;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div v-if="!store.isLogin" class="nav-buttons">
          <RouterLink :to="{ name: 'SignUpView' }" class="nav-button"
            >회원가입</RouterLink
          >
          |
          <RouterLink :to="{ name: 'LogInView' }" class="nav-button"
            >로그인</RouterLink
          >
        </div>
        <div v-else class="nav-buttons">
          <RouterLink :to="{ name: 'ProfileView' }" class="nav-button"
            >프로필</RouterLink
          >
          |
          <button @click="logOut" class="nav-button">로그아웃</button>
        </div>
        <RouterLink :to="{ path: '/', exact: true }" class="nav-button"
          >홈</RouterLink
        >
        <RouterLink to="/exchange" class="nav-button">환율</RouterLink>
        <RouterLink to="/bankmap" class="nav-button">은행 지도</RouterLink>
        <RouterLink to="/bankmap2" class="nav-button">은행 지도2</RouterLink>
        <RouterLink to="/financialproducts" class="nav-button"
          >예적금비교</RouterLink
        >
        <RouterLink to="/article" class="nav-button">게시판</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: right;
  padding: 1rem 0;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
  color: white;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.nav-button:hover {
  /* 호버 시 스타일을 변경합니다. */
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-buttons {
  border: 0;
  display: flex;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  nav {
    text-align: right;
    margin-left: 0;
    width: auto;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div v-if="!store.isLogin" class="auth-buttons">
          <RouterLink :to="{ name: 'SignUpView' }" class="nav-button"
            >회원가입</RouterLink
          >
          |
          <RouterLink :to="{ name: 'LogInView' }" class="nav-button"
            >로그인</RouterLink
          >
        </div>
        <div v-else class="auth-buttons">
          <RouterLink :to="{ name: 'ProfileView' }" class="nav-button"
            >프로필</RouterLink
          >
          |
          <button @click="logOut" class="nav-button">로그아웃</button>
        </div>
        <RouterLink :to="{ path: '/', exact: true }" class="nav-button"
          >홈</RouterLink
        >
        <RouterLink to="/exchange" class="nav-button">환율</RouterLink>
        <RouterLink to="/bankmap" class="nav-button">은행 지도</RouterLink>
        <RouterLink to="/bankmap2" class="nav-button">은행 지도2</RouterLink>
        <RouterLink to="/financialproducts" class="nav-button"
          >예적금비교</RouterLink
        >
        <RouterLink to="/article" class="nav-button">게시판</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: right;
  padding: 1rem 0;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
  color: white;
}

.auth-buttons {
  border: 0;
  display: flex;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.nav-button:hover {
  /* 호버 시 스타일을 변경합니다. */
  background-color: rgba(255, 255, 255, 0.1);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  nav {
    text-align: right;
    margin-left: 0;
    width: auto;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .auth-buttons {
    font-size: 0.9rem;
  }

  .nav-button {
    font-size: 1rem;
  }
}
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div v-if="!store.isLogin" class="auth-buttons">
          <RouterLink :to="{ name: 'SignUpView' }" class="nav-button"
            >회원가입</RouterLink
          >
          |
          <RouterLink :to="{ name: 'LogInView' }" class="nav-button"
            >로그인</RouterLink
          >
        </div>
        <div v-else class="auth-buttons">
          <RouterLink :to="{ name: 'ProfileView' }" class="nav-button"
            >프로필</RouterLink
          >
          |
          <button @click="logOut" class="nav-button">로그아웃</button>
        </div>
        <RouterLink :to="{ path: '/', exact: true }" class="nav-button"
          >홈</RouterLink
        >
        <RouterLink to="/exchange" class="nav-button">환율</RouterLink>
        <RouterLink to="/bankmap" class="nav-button">은행 지도</RouterLink>
        <RouterLink to="/bankmap2" class="nav-button">은행 지도2</RouterLink>
        <RouterLink to="/financialproducts" class="nav-button"
          >예적금비교</RouterLink
        >
        <RouterLink to="/article" class="nav-button">게시판</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: right;
  padding: 1rem 0;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
  color: white;
}

.auth-buttons {
  border: 0;
  display: flex;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.nav-button:hover {
  /* 호버 시 스타일을 변경합니다. */
  background-color: rgba(255, 255, 255, 0.1);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  nav {
    text-align: right;
    margin-left: 0;
    width: auto;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .auth-buttons {
    font-size: 0.9rem;
  }

  .nav-button {
    font-size: 1rem;
  }
}
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div v-if="!store.isLogin" class="auth-buttons">
          <RouterLink :to="{ name: 'SignUpView' }" class="nav-button"
            >회원가입</RouterLink
          >
          |
          <RouterLink :to="{ name: 'LogInView' }" class="nav-button"
            >로그인</RouterLink
          >
        </div>
        <div v-else class="auth-buttons">
          <RouterLink :to="{ name: 'ProfileView' }" class="nav-button"
            >프로필</RouterLink
          >
          |
          <button @click="logOut" class="nav-button">로그아웃</button>
        </div>
        <RouterLink :to="{ path: '/', exact: true }" class="nav-button"
          >홈</RouterLink
        >
        <RouterLink to="/exchange" class="nav-button">환율</RouterLink>
        <RouterLink to="/bankmap" class="nav-button">은행 지도</RouterLink>
        <RouterLink to="/bankmap2" class="nav-button">은행 지도2</RouterLink>
        <RouterLink to="/financialproducts" class="nav-button"
          >예적금비교</RouterLink
        >
        <RouterLink to="/article" class="nav-button">게시판</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: right;
  padding: 1rem 0;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
  color: white;
}

.auth-buttons {
  border: 0;
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.nav-button:hover {
  /* 호버 시 스타일을 변경합니다. */
  background-color: rgba(255, 255, 255, 0.1);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  nav {
    text-align: right;
    margin-left: 0;
    width: auto;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .auth-buttons {
    font-size: 0.9rem;
  }

  .nav-button {
    font-size: 1rem;
  }
}
</style> -->
<!-- 
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div v-if="!store.isLogin" class="auth-buttons">
          <RouterLink :to="{ name: 'SignUpView' }" class="nav-button"
            >회원가입</RouterLink
          >
          |
          <RouterLink :to="{ name: 'LogInView' }" class="nav-button"
            >로그인</RouterLink
          >
        </div>
        <div v-else class="auth-buttons">
          <RouterLink :to="{ name: 'ProfileView' }" class="nav-button"
            >프로필</RouterLink
          >
          |
          <button @click="logOut" class="nav-button">로그아웃</button>
        </div>
        <RouterLink
          :to="{ path: '/', exact: true }"
          class="nav-button font-bold"
          >홈</RouterLink
        >
        <RouterLink to="/exchange" class="nav-button font-bold"
          >환율</RouterLink
        >
        <RouterLink to="/bankmap" class="nav-button">은행 지도</RouterLink>
        <RouterLink to="/bankmap2" class="nav-button font-bold"
          >은행 지도</RouterLink
        >
        <RouterLink to="/financialproducts" class="nav-button font-bold">
          예적금비교
        </RouterLink>
        <RouterLink to="/article" class="nav-button font-bold"
          >게시판</RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: right;
  padding: 1rem 0;
  margin-right: 1rem;
  font-family: "Courier New", Courier, monospace;
  color: white;
}

.auth-buttons {
  border: 0;
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.font-bold {
  font-weight: bold;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  nav {
    text-align: right;
    margin-left: 0;
    width: auto;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .auth-buttons {
    font-size: 0.9rem;
  }

  .nav-button {
    font-size: 1rem;
  }
}
</style> -->

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div v-if="!store.isLogin" class="auth-buttons">
          <RouterLink :to="{ name: 'SignUpView' }" class="nav-button"
            >회원가입</RouterLink
          >
          |
          <RouterLink :to="{ name: 'LogInView' }" class="nav-button"
            >로그인</RouterLink
          >
        </div>
        <div v-else class="auth-buttons">
          <RouterLink :to="{ name: 'ProfileView' }" class="nav-button"
            >프로필</RouterLink
          >
          |
          <button @click="logOut" class="nav-button">로그아웃</button>
        </div>
        <RouterLink :to="{ path: '/', exact: true }" class="nav-button">
          홈
        </RouterLink>
        <RouterLink to="/exchange" class="nav-button"> 환율 </RouterLink>
        <!-- <RouterLink to="/bankmap2" class="nav-button"> 은행 지도 </RouterLink> -->
        <RouterLink to="/bankmap" class="nav-button"> 은행 지도 </RouterLink>
        <RouterLink to="/financialproducts" class="nav-button">
          예적금비교
        </RouterLink>
        <RouterLink to="/article" class="nav-button"> 게시판 </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const logOut = store.logOut;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0, 75, 76);
  width: 100%;
  padding: 1rem 0;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Arial", sans-serif;
}

.auth-buttons {
  display: flex;
  align-items: center;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

@media (min-width: 768px) {
  .nav-button {
    font-size: 1.2rem;
  }
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    padding: 0;
  }

  .auth-buttons {
    font-size: 1rem;
  }

  .nav-button {
    font-size: 1rem;
  }
}
</style>
