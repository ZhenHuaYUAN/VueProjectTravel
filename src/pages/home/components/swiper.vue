<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- 轮播的左右箭头 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- 轮播的滚动条 -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 轮播图下面的点、支持循环轮播
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
//样式进行一个穿透，不受scoped限制
  .wrapper >>> .swiper-pagination-bullet-active
    background : white !important
  .wrapper
    width : 100%
    height : 0
    overflow : hidden
    background : #cccccc
    padding-bottom : 31.25%   //高度由宽度决定，自动撑开31.25%的width
    .swiper-img
        width : 100%
</style>
