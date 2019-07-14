import VueRouter from "vue-router"

import homecontainer from "./components/tabbar/homecontainer.vue"
import shopcarcontainer from "./components/tabbar/shopcarcontainer.vue"
import mycontainer from "./components/tabbar/mycontainer.vue"
import discovercontainer from "./components/tabbar/discovercontainer.vue"
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:homecontainer},
        {path:"/shopcar",component:shopcarcontainer},
        {path:"/my",component:mycontainer},
        {path:"/discover",component:discovercontainer},
    ],
    linkActiveClass:"mui-active"
})


export default router