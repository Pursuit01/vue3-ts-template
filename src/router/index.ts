import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layout/BasicLayout.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: BasicLayout,
    redirect: "/product",
    meta: { name: "routes.home" },
    children: [
      {
        name: "product",
        path: "/product",
        component: () => import("../views/Product/Product.vue"),
        redirect: "/product/list",
        meta: { name: "routes.product" },
        children: [
          {
            name: "productList",
            path: "/product/list",
            component: () => import("../views/Product/ProductList.vue"),
            meta: { name: "routes.productList" },
          },
          {
            name: "productForm",
            path: "/product/add",
            component: () => import("../views/Product/ProductForm.vue"),
            meta: { name: "routes.addProduct" },
          },
        ],
      },
      {
        name: "i18n",
        path: "/i18n",
        component: () => import("../components/i18n.vue"),
        meta: { name: "routes.i18n" },
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
