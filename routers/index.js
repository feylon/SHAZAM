import { createRouter,createWebHashHistory } from "vue-router";
import Home from "../src/Home.vue";
import song from "../src/songs.vue";

const routers = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:"/", component : Home},
        {path:"/songs", component : song}

    ]
});
export default routers;