import Vue from 'vue'
//import App from './App.vue'
import SearchPage from './SearchPage.vue'
//import AppApp from './App2.vue'
Vue.config.productionTip = false

// new Vue({
//   render: h => h(AppApp),
// }).$mount('#app')

new Vue({
  render: h => h(SearchPage),
}).$mount('#app')

