<template>
  <div>
    <Home-header :city='city'></Home-header>
    <Home-swiper :list='swiperList'></Home-swiper>
    <Home-icons :list='iconList'></Home-icons>
    <Home-recommend :list='recommendList'></Home-recommend>
    <Home-weekend :list='weekendList'></Home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  // 声明周期函数
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      // 在config的index.js中 proxyTable 设置代理转发
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style>

</style>
