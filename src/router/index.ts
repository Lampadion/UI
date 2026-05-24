import { createRouter, createWebHistory } from 'vue-router';
import { layouts } from '@/shared/layouts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { layout: layouts.default },
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('@/views/TooltipView.vue'),
      meta: { layout: layouts.tooltip },
    },
  ],
});

export default router;
