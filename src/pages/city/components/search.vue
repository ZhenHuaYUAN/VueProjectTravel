<template>
  <div>
    <div class="search">
      <input v-model="keyWord" type="text" placeholder="输入城市名或拼音" class="search-input"/>
    </div>
    <!-- 搜索出来的内容显示在这个区块里 -->
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" >{{item.name}}</li>
        <li class="search-item border-bottom" v-show='hasNoData'>没有找到匹配城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  props: {
    cities: Object
  },
  watch: {
    // 监听keyWord的变化
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      // 延时100ms执行
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          // 对每一个键值对的数组再做一次遍历
          this.cities[i].forEach(value => {
            // 从spell或者name中能搜索到关键词
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .search
    height : .72rem
    background : $bgColor
    padding : 0 .1rem
    .search-input
      box-sizing : border-box
      height : .62rem
      line-height : .62rem
      width : 100%
      text-align : center
      border-radius : .06rem
      color : #666666
      padding : 0 .1rem
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    bottom 0
    left 0
    right 0
    background #eeeeee
    z-index 1
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #ffffff
</style>
