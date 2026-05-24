<script setup lang="ts">
const route = useRoute();

onMounted(() => {
  const appParent = document.getElementById('app')?.parentElement;
  appParent?.classList.add(route.meta.layout.cssClass);
});

watch(
  () => route.meta.layout,
  (layout) => {
    layout?.onMounted?.();
  },
  { immediate: true }
);
</script>

<template>
  <component :is="route.meta.layout.component">
    <RouterView />
  </component>
</template>
