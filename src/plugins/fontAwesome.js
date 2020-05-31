
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faAngleUp, faThLarge, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faPinterest, faInstagram, faWhatsapp, faHome, faAngleUp, faThLarge, faSun, faMoon)
 
Vue.component('fa-icon', FontAwesomeIcon)