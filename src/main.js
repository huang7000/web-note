import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import HvSnippet from "@/components/hv-snippet";
Vue.component("HvSnippet", HvSnippet);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("prerender-spa-event"));
  }
}).$mount("#app");
