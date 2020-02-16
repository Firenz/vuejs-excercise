import Vue from "vue";
import vueDebounce, { PluginConfig } from "vue-debounce";
import App from "./App.vue";

Vue.use<PluginConfig>(vueDebounce, {
  lock: true,
  defaultTime: "500ms",
  listenTo: "keyup"
});

new Vue({
  el: "#root",
  render: h => h(App)
});
