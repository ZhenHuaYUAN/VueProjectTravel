<template>
  <ul class="list">
   <li class="item" v-for="item of letters" :key="item" :ref="item"
       @touchstart.prevent='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd' @click="handleLetterClick">
     {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  // 页面数据发生更新页面重新渲染时的生命钩子函数,在获取到city传过来的数据后，cities的值才发生变化，进行重新渲染。这时获取A字母所在的
  // offsetTop的值
  updated () {
    // 获取字母A距离组件顶部的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // 把字母传递给list组件 先传给city组件，然后再有city组件传给list组件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus === true) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 延迟16ms后执行滚动操作。函数截流，大大节约执行频率，优化代码性能
        this.timer = setTimeout(() => {
          // e.touches[0].clientY 手指距离屏幕最顶部的高度
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
