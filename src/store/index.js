import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  // actions接受传递过来的内容，名字和使用this.$store.dispatch时的名字一样
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
