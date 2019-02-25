import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import City from '@/pages/city/city.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 动态路由，前面的路径必须是detail/，后面可以带个参数，这个参数放到名字叫id的变量里面
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 每一次做路由切换时，都让新进入显示的页面x轴初始位置为0，y轴初试位置也为0
  scrollBehavior (to, from, savePosition) {
    return {x: 0, y: 0}
  }
})
