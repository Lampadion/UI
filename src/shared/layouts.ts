import { initWindowVariables } from '@/utils/windowVariables';

export interface Layout {
  component: Component;
  cssClass: string;
  onMounted?: () => void;
}

export const layouts = {
  default: {
    component: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue')),
    cssClass: 'layout-default',
    onMounted: () => {
      initWindowVariables();
    },
  },
  tooltip: {
    component: defineAsyncComponent(() => import('@/layouts/TooltipLayout.vue')),
    cssClass: 'layout-tooltip',
  },
} satisfies Record<string, Layout>;
