import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
const Home = () => import("../views/HomeView.vue");
const Food = () => import("../views/FoodView.vue");
const Cart = () => import("../views/CartView.vue");
const FoodDetail = () => import("../views/FoodDetailView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/foods",
    name: "FoodView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is ../views/FoodView.vue
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../views/FoodsView.vue"),
    component: Food,
  },
  {
    path: "/foods/:id",
    name: "FoodDetailView",
    component: FoodDetail,
  },
  {
    path: "/cart",
    name: "CartView",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
