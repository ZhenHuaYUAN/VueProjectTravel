<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- keep-alive 路由被加载过一次后，就把路由中的内容放到内存中，下一次再进这个路由时，不需要重新渲染组件，只需要把以前的内容从内存中
    拿出来 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// 当一个文件以.vue结尾时，将这个文件叫做一个单文件组件
export default {
  name: 'App'
}
</script>

<style>

</style>
