import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
    component:(resolve)=>require(['.././components/Login'],resolve)
    },
    {
      path: '/Home',
      component:(resolve)=>require(['.././components/Layout'],resolve)
    },

  ]
})
