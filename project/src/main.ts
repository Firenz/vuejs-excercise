import Vue from "vue";
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { router } from './router';
import vueDebounce, { PluginConfig } from "vue-debounce";
import App from "./App.vue";

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.use<PluginConfig>(vueDebounce, {
  lock: true,
  defaultTime: "500ms",
  listenTo: "keyup"
});

new Vue({
  el: "#root",
  router,
  render: h => h(App)
});
