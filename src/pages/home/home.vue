<template>
  <div>
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
    <Home-icons></Home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons
  }
}
</script>

<style>

</style>
