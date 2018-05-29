import Vue from 'vue'
import Router from 'vue-router'
import Alert from 'packages/alert/src/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    }
  ]
})
