import { dimensions } from '@/stores/window';

export function initWindowVariables() {
  const style = document.documentElement.style;

  watch(
    dimensions,
    (val) => {
      if (!val) {
        style.removeProperty('--window-width');
        style.removeProperty('--window-height');
        return;
      }

      if (val.width) {
        style.setProperty('--window-width', `${val.width}px`);
      } else {
        style.removeProperty('--window-width');
      }

      if (val.height) {
        style.setProperty('--window-height', `${val.height}px`);
      } else {
        style.removeProperty('--window-height');
      }
    },
    { immediate: true, deep: true }
  );
}
