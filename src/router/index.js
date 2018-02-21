import Vue from 'vue'
import Router from 'vue-router'
import TxtNumber from '../components/TxtNumber.vue'
import FastSelect from '../components/FastSelect.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TxtNumber',
      component: TxtNumber
    },
    {
      path: '/fastSelect',
      name: 'FastSelect',
      component: FastSelect
    }
  ]
})
