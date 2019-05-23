import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";
import "./plugins/element.js";
import "normalize.css";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
