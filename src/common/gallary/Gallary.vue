<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options='swiperOptions'>
        <swiper-slide v-for="(item, index) in imgs" :key="index">
            <img class="gallary-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 设置数字显示页码
        paginationType: 'fraction',
        // 解决一开始设置为隐藏，显示后因计算宽度有问题不能正常滚动。swipper插件只要监听到父级元素发生dom结构的变化会自动的自我刷新一次。
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      // 画廊被点击时触发事件给banner.vue
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #000
    z-index 99
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
