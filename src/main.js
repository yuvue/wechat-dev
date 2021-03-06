import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import './plugins/element.js'
import 'normalize.css'
import './registerServiceWorker'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.directive('anchor', {
  inserted: function(el, binding) {
    el.onclick = function() {
      let e = document.getElementById(`a-${binding.value}`)
      let mainEl = document.querySelector('#app > div > main')
      mainEl && e && mainEl.scrollTo(0, e.offsetTop - 45)
    }
  },
})

Vue.use(VueLazyLoad, {
  loading: '/img/timg.gif',
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
