import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("formatNumber", function(value) {
  let val = (value / 1).toFixed(2).replace(" ", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
