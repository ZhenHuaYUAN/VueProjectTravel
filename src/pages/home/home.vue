<template>
  <div>
    <Home-header></Home-header>
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
import { mapState } from 'vuex'
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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  // 声明周期函数
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 使用了keep-alive后的生命周期函数，页面重新被显示的时候会执行
  activated () {
    // 判断当前页面的城市和上一次的是否相同，如果不相同，再发一次ajax请求
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
  },
  methods: {
    getHomeInfo () {
      // 在config的index.js中 proxyTable 设置代理转发
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
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
