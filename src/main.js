import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'common/stylus/index.styl'
import './assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import animate from 'animate.css'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(animate)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = '广州思铭软件有限公司'
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
