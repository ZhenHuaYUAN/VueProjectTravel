<template>
  <div>
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper
  }
}
</script>

<style>

</style>
