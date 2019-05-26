import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import store from "@/stores/index";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  let el = document.querySelector("#app > div > main");
  let pos = el ? el.scrollTop : 0;
  store.commit("SET_SCROLL", { [from.path]: pos });
  next();
});

router.afterEach(to => {
  setTimeout(() => {
    let el = document.querySelector("#app > div > main");
    el && (el.scrollTop = store.getters.scroll(to.path));
  });
});

export default router;
