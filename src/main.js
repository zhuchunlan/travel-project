import Vue from 'vue'
import App from './App.vue'
import router from './router'


//resset.css 重置样式
import './assets/css/resset.css'

//fastClick 解决click事件在移动端300ms延迟的问题
import FastClick from 'fastclick'
FastClick.attach(document.body)

//引入字体图标
import './assets/css/iconfont.css'

//引入font.js适配文件
import './assets/js/font'

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


//引入动画库animate.css
import animated from'animate.css'
Vue.use(animated)


Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
