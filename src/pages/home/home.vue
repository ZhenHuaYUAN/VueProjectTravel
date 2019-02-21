<template>
  <div>
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
    <Home-icons></Home-icons>
    <Home-recommend></Home-recommend>
    <Home-weekend></Home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
