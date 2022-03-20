import Vue from 'vue'
import App from './App.vue'

// 完整引入ElementUI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// 使用ElementUI
// Vue.use(ElementUI);

// 按需引入
import { Button,Row,DatePicker } from 'element-ui';
Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
