import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cuisines",
    name: "cuisines",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cuisines" */ "../views/Cuisines.vue"),
  },
  {
    path: "/cuisine/:slug",
    name: "cuisinePresentation",
    props: true,

    component: () =>
      import(
        /* webpackChunkName: "cuisinePresentation" */ "../views/CuisinePresentation.vue"
      ),
    children: [
      {
      path: ":listslug",
      name: "cuisineDetails",
      props: true,

      component: () =>
      import(
        /* webpackChunkName: "cuisineList" */ "../views/CuisineDetails.vue"
      ),
    },
  ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#presentation") {
          position.offset = { y: 120 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
});

export default router;
