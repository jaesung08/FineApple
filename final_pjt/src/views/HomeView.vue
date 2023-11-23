<template>
  <main>
    <div class="banner">
      <router-link to="/" tag="div">
        <Logo />
      </router-link>
      <Search />
    </div>
    <div class="space200"></div>
    <div class="carousel">
      <Carousel />
    </div>
    <footer class="footer">
      <p>&copy; 2023 FineApple. All rights reserved.</p>
    </footer>
  </main>
</template>

<script setup>
import Carousel from "@/components/Carousel.vue";
import Search from "@/components/Search.vue";
import Logo from "@/components/Logo.vue";
</script>

<style>
/* 배너 스타일 수정 */
.banner {
  height: 20%;
  background-color: rgb(0, 75, 76);
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1; /* 배너는 z-index가 1로 설정 */
}

/* 캐로셀 스타일 수정 */
/* 캐로셀 스타일 수정 */
.carousel {
  position: relative;
  width: 100%;
  height: 20%;
  max-width: 1000px;
  /* display: flex; */
  justify-content: center;
  flex-direction: column;
  margin-top: 40px; /* 적절한 값으로 조절 */
  z-index: 0;
}

.space200 {
  height: 100px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0; /* 회색 배경색 지정 */
  padding: 3px; /* 상하좌우 여백 지정 */
  text-align: center; /* 텍스트 가운데 정렬 */
  height: 10%;
}
</style>
