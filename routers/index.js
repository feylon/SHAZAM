import { createRouter,createWebHashHistory } from "vue-router";
import Home from "../src/Home.vue";

const routers = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:"/", component : Home},

    ]
});
export default routers;