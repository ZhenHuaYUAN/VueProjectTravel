<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref='key'>
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    handleCityClick (city) {
      // 使用Vuex中的Actions 调用Dispatch方法。当逻辑不复杂时候可以省略action的步骤
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      // 做页面跳转，跳转到主页
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  // 侦听器，监听letter的变化
  watch: {
    letter () {
      if (this.letter) {
        // 循环得到的列表，所得的this.$refs[this.letter]是一个数组,better-scroll所需的参数必须是一个dom元素
        const element = this.$refs[this.letter][0]
        console.log(element)
        // better-scroll的接口
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .border-bottom
    &:before
      border-color #cccccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    .title
      line-height  .54rem
      background #eee
      color #666666
      padding-left .2rem
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          padding .1rem 0
          margin .1rem
          border .02rem solid #cccccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666666
        padding-left .2rem
</style>
