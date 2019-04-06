import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/pages/Home'
import BuenosAires from '@/components/pages/ba/BuenosAires'
import Booking from '@/components/pages/booking/Booking'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/buenos-aires',
      component: BuenosAires
    },
    {
      path: '/booking',
      component: Booking
    },
    {
      path: '/',
      component: Home
    }
  ]
})