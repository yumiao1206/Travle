// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端300毫秒点击延迟解决方案
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 支持es6 promise
import 'babel-polyfill'
import store from './store/index'
import 'styles/reset.css'
// 1像素边框解决方案
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
