// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

const initialState = {
  backgroundColor: '#004040',
  color: '#ACFFFF'
}

const store = new Vuex.Store({
  state: {
    colors:
    JSON.parse(localStorage.getItem('colors')) || initialState
  },
  mutations: {
    changeBackgroundColor(state, color) {
      state.colors.backgroundColor = color
      localStorage.setItem('colors', JSON.stringify(state.colors))
    },
    changeColor(state, color) {
      state.colors.color = color
      localStorage.setItem('colors', JSON.stringify(state.colors))
    },
    resetColors(state) {
      state.colors = initialState
      localStorage.setItem('colors', JSON.stringify(initialState))
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
