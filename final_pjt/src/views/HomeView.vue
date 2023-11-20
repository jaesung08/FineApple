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
</style>
