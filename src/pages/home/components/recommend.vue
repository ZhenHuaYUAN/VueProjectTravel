<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/b8/b8b3a74ccd3bd83690.water.jpg_200x200_cf9e2b42.jpg',
        title: '上海迪士尼乐园',
        desc: '12345556'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园1',
        desc: '123455666'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园2',
        desc: '1234556'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl';
  .title
    margin-top : .2rem
    line-height : .8rem
    text-indent : .2rem
  .item
    overflow : hidden
    display : flex
    height : 1.9rem
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding: .1rem
    .item-info
      flex : 1
      padding: .1rem
      min-width : 0
      .item-title
        line-height : .54rem
        font-size : .32rem
        overflow : hidden
        white-space : nowrap
        text-overflow : ellipsis
      .item-desc
        line-height : .4rem
        color : #cccccc
        overflow : hidden
        white-space : nowrap
        text-overflow : ellipsis
      .item-button
        line-height : .44rem
        margin-top : .16rem
        background : #ff9300
        padding : 0 .2rem
        border-radius : .06rem
        color : #ffffff
</style>
