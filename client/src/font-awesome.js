import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faCaretDown,
  faCloud,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { 
  // faCloud
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faAngleDown,
  faCaretDown,
  faCloud,
  faSearch
)

Vue.component('fa-icon', FontAwesomeIcon)