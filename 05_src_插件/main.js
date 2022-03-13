import Vue from 'vue'
import App from './App.vue'

// 引入插件
import plugins from "@/plugins";
// 使用插件
Vue.use(plugins)

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
}).$mount('#app')