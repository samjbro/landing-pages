import Vue from 'vue'

import '#/main.scss'
import './font-awesome.js'
import router from './router'
import App from '@/components/App'

new Vue({
  router,
  el: '#root',
  render: h => h(App)
})