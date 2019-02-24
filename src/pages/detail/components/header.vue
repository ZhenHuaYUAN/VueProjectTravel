<template>
  <div>
    <router-link class="header-abs" tag="div" to="/" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <!-- 渐隐渐现 -->
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情</div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 40) {
        let opacity = top / 120
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 绑定的是全局的window组件，不仅仅对这个组件有效果，对其他组件也会产生影响。需要进行解绑
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被替换成新的页面时执行
  deactivated () {
    // 解绑
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .6rem
    height .6rem
    line-height .6rem
    text-align center
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fixed
    position : fixed
    top 0
    left 0
    right 0
    height: $headerHeight
    line-height : $headerHeight
    text-align : center
    color : #ffffff
    background : $bgColor
    font-size : .32rem
    .header-fixed-back
      position : absolute
      top : 0
      left : 0
      width : .64rem
      text-align : center
      font-size : .4rem
      color : #ffffff
</style>
