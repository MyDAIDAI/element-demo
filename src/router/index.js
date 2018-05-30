import Vue from 'vue'
import Router from 'vue-router'
import Alert from '@/components/Alert'
import Row from '@/components/Row'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/row',
      name: Row,
      component: Row
    }
  ]
})
