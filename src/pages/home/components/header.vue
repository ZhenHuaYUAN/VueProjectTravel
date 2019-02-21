<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang='stylus' scoped>
    // 导入样式变量 ~@=src  在bulid/webpack.base.conf.js中的resolve:alias里设置 src/assets/styles === ~styles 修改了webpack配置项后一定要重启
    @import '~styles/varibles.styl';
    .header
        display: flex
        line-height: $headerHeight
        background :$bgColor
        color :#fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            color: #ffffff
            .arrow-icon
                margin-left: -.04rem
                font-size: .28rem
        .header-input
            flex: 1
            margin-top: .12rem
            margin-left: .12rem
            padding-left: .2rem
            height: .64rem
            line-height: .64rem
            background: #ffffff
            border-radius: .1rem
            color: #cccccc
</style>
