// 该文件创建整个应用的路由器
import Vue from 'vue'
import VueRouter from "vue-router";
// 引入VueRouter插件
Vue.use(VueRouter)

import About from "@/pages/About";
import Home from "@/pages/Home";

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})