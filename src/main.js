import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import HvSnippet from "@/components/hv-snippet";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component("HvSnippet", HvSnippet);

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("prerender-spa-event"));
  }
}).$mount("#app");
