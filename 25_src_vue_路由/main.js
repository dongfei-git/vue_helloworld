import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this  //安装全局事件总线
    },
    router
}).$mount('#app')
