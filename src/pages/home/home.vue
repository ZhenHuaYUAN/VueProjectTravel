<template>
  <div>
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
    <Home-icons></Home-icons>
    <HomeRecommend></HomeRecommend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style>

</style>
