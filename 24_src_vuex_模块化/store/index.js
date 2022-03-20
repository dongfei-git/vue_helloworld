// 该文件用于创建Vuex中最为核心的store
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)  //应用vuex

import countOptions from "@/store/count";

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions
    }
})