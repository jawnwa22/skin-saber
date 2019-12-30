import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Index from "@/page/Index.vue";
import Article from "@/views/Article";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Index,
        children: [
            {
                path: "",
                component: Home,

            },
            {
                path: "/article/:id",
                component: Article,
                props: true
            }
        ]
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
