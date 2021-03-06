import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
import checkIfMobile from './mixins/checkIfMobile'
require ('./plugins/fontAwesome.js')


export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
  head.htmlAttrs = { lang: 'en' }
}


