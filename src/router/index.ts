import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/home/index.vue"),
    children: [
      {
        path: "/exammanage",
        component: () => import("@/pages/exammanage/index.vue"),
      },
      {
        path: "/exammanage/management/:id",
        component: () => import("@/pages/exammanage/pages/management/index.vue"),
      },
      {
        path: "/tchmanage",
        component: () => import("@/pages/tchmanage/index.vue"),
      },
      {
        path: "/examlist",
        component: () => import("@/pages/examlist/index.vue"),
      },
      {
        path: "/examlist/gradelist/:id",
        component: () => import("@/pages/examlist/pages/grade/index.vue"),
      },
      {
        path: "/report",
        component: () => import("@/pages/report/index.vue"),
      },
      {
        path: '/grandinglist',
        component: () => import('@/pages/grandinglist/index.vue')
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
