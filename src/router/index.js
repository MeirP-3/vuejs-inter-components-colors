import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import UserPrefs from '@/components/UserPrefs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/prefs',
      name: 'user-prefs',
      component: UserPrefs
    }
  ]
})
