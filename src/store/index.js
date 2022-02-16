import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters' // 为了更好的访问是三个子模块的值
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters
})

export default store
