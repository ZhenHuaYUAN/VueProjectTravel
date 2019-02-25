<template>
  <div>
    <div class="banner" @click='handleBannerClick'>
      <img class="banner-img"
      :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe602;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <!-- common-gallary 作为一个插槽的形式插入到fade-animation中 -->
    <fade-animation>
      <common-gallary @close='handleGallaryClose' :imgs='bannerImgs' v-show="showGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      // 从上到下的渐变
      background-image linear-gradient(top,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        line-height .4rem
        height .32rem
        border-radius .2rem
        font-size .24rem
        background rgba(0,0,0,.8)
        .banner-icon
          font-size .24rem
</style>
