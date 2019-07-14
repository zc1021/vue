// // 导入vue模块
import Vue from "vue"

// 导入App.vue模板文件
import App from "./App.vue"

//导入 mint-ui模块
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入mui文件
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"
import "./lib/mui/fonts/mui.ttf"
import "./lib/mui/fonts/mui-icons-extra.ttf"

// 导入路由模块
import VueRouter from "vue-router"
Vue.use(VueRouter)
//导入router文件
import router from "./router.js"

//导入 axios
import axios from "axios"
// Vue.use(axios) 这是错误方法
Vue.prototype.axios = axios

var vm = new Vue({
    el:"#app",
    render:c=>c(App),
    router
})

