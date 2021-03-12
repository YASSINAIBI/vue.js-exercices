import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "normalize.css";

// export const HTTP = axios.create({
//   baseURL: `http://jsonplaceholder.typicode.com/`,
//   headers: {
//     Authorization: 'Bearer {token}'
//   }
// })

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
