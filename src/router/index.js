import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tuto from "../views/Tuto.vue";

// allTuto
import Tuto1 from "../components/allTuto/tuto1.vue";
import Tuto2 from "../components/allTuto/tuto2.vue";
import Tuto3 from "../components/allTuto/tuto3.vue";
import Tuto4 from "../components/allTuto/tuto4.vue";
import Tuto5 from "../components/allTuto/tuto5.vue";
import Tuto6 from "../components/allTuto/tuto6.vue";
import Tuto7 from "../components/allTuto/tuto7.vue";
import Tuto8 from "../components/allTuto/tuto8.vue";
import Tuto9 from "../components/allTuto/tuto9.vue";
import Tuto10 from "../components/allTuto/tuto10.vue";
import Tuto11 from "../components/allTuto/tuto11.vue";
import Tuto12 from "../components/allTuto/tuto12.vue";
import Tuto13 from "../components/allTuto/tuto13.vue";
import Tuto14 from "../components/allTuto/tuto14.vue";
import Tuto15 from "../components/allTuto/tuto15.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/tuto",
        name: "Tuto",
        component: Tuto
    },
    {
        path: "/tuto/tuto1",
        name: "Tuto1",
        component: Tuto1
    },
    {
        path: "/tuto/tuto2",
        name: "Tuto2",
        component: Tuto2
    },
    {
        path: "/tuto/tuto3",
        name: "Tuto3",
        component: Tuto3
    },
    {
        path: "/tuto/tuto4",
        name: "Tuto4",
        component: Tuto4
    },
    {
        path: "/tuto/tuto5",
        name: "Tuto5",
        component: Tuto5
    },
    {
        path: "/tuto/tuto6",
        name: "Tuto6",
        component: Tuto6
    },
    {
        path: "/tuto/tuto7",
        name: "Tuto7",
        component: Tuto7
    },
    {
        path: "/tuto/tuto8",
        name: "Tuto8",
        component: Tuto8
    },
    {
        path: "/tuto/tuto9",
        name: "Tuto9",
        component: Tuto9
    },
    {
        path: '/tuto/tuto10',
        name: 'Tuto10',
        component: Tuto10
    },
    {
        path: '/tuto/tuto11',
        name: 'Tuto11',
        component: Tuto11
    },
    {
        path: '/tuto/tuto12',
        name: 'Tuto12',
        component: Tuto12
    },
    {
        path: '/tuto/tuto13',
        name: 'Tuto13',
        component: Tuto13
    },
    {
        path: '/tuto/tuto14',
        name: 'Tuto14',
        component: Tuto14
    },
    {
        path: '/tuto/tuto15',
        name: 'Tuto15',
        component: Tuto15
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

