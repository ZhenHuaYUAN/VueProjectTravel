<template>
  <div>
  <detail-banner :sightName='sightName' :bannerImg='bannerImg' :bannerImgs='gallaryImgs'></detail-banner>
  <detail-header></detail-header>
  <div class="content">
    <detail-list :list='list'></detail-list>
  </div>
  </div>
</template>

<script>
import detailBanner from './components/banner.vue'
import detailHeader from './components/header.vue'
import detailList from './components/list.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  // 通过keep-alive做了缓存，mountd只会执行一次，多次访问不同的详情页时也不会重新发ajax请求，如果需要每次都发不同的ajax请求，必须配合使用
  // activated生命周期函数或在App.vue中设置详情页面不做缓存
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang='stylus' scoped>
  .content
    height 50rem
</style>
