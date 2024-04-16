import { createRouter, createWebHashHistory } from "vue-router";
import axios from "../plugins/axios";
import { useStore } from "../store";

const ViewList = () => import("../views/ViewList.vue");
const ViewDetail = () => import("../views/ViewDetail.vue");

const routes = [
    {
        path: "/",
        name: "Home",
        component: ViewList,
        beforeEnter: (to) => getPokemonList(to),
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: ViewDetail,
        beforeEnter: (to) => getPokemonID(to),
    },
];

async function getPokemonList(to) {
    const store = useStore();
    //   const { data } = await axios.get("/");

    store.updatePokemonList();

    //   console.log(data);
}

async function getPokemonID(to) {
    //   const { data } = await axios.get(`/${to.params.id}`);
    //   console.log(data);
}

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
