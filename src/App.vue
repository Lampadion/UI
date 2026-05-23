<script setup lang="ts">
import { initWindowVariables } from './utils/windowVariables';

onMounted(() => {
  initWindowVariables();
});
</script>

<template>
  <RouterView />
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style lang="scss" src="./styles/default.scss" />
