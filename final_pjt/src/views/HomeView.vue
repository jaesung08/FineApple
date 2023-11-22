<template>
  <main>
    <div class="banner">
    <Logo />
    <Search />
    </div>
    <div class="space200">
    </div>
    <div>
    <Carousel />
  </div>
  <footer class="footer">
      <p>&copy; 2023 FineApple. All rights reserved.</p>
    </footer>
  </main>
</template>


<script setup>
import Carousel from '@/components/Carousel.vue'
import Search from '@/components/Search.vue'
import Logo from '@/components/Logo.vue'


</script>

<style>
.banner {
    height: 20%;
    background-color: rgb(0, 75, 76);
    display: flex;
    /* justify-content: center; */
}
.space200 {
    height: 200px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0; /* 회색 배경색 지정 */
  padding: 10px; /* 상하좌우 여백 지정 */
  text-align: center; /* 텍스트 가운데 정렬 */
}
</style>
