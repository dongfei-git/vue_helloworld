// 该文件创建整个应用的路由器
import Vue from 'vue'
import VueRouter from "vue-router";
// 引入VueRouter插件
Vue.use(VueRouter)

import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

const router = new VueRouter({
    routes: [
        {
            name: 'about',
            meta: {title: '关于'},
            path: '/about',
            component: About
        },
        {
            name: 'home',
            meta: {title: '主页'},
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'news',
                    meta: {title: '新闻', isAuth: true},
                    path: 'news',
                    component: News
                },
                {
                    name: 'message',
                    meta: {title: '消息', isAuth: true},
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            meta: {title: '详情'},
                            path: 'detail/:id/:title',
                            component: Detail,
                            props: true
                        }
                    ]
                }
            ],
        }
    ]
})

export default router