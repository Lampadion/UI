import { Layout } from '@/shared/layouts';

declare module 'vue-router' {
  interface RouteMeta {
    layout: Layout;
  }
}
