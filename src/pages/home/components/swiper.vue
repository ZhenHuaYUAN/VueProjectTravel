<template>
<div class="wrapper">
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        // 轮播图下面的点、支持循环轮播
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
        }, {id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/4642f3d4ca2aaaa3c7c522f9eb86fdc7.jpg_750x200_5a390d78.jpg'
        }
      ]
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
    padding-bottom : 27%   //高度由宽度决定，自动撑开31.25%的width
    .swiper-img
        width : 100%
</style>
