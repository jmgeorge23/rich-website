import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router";
import VuePageTransition from 'vue-page-transition';


Vue.use(VueRouter);
Vue.use(VuePageTransition)



Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
