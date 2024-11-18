<template>
  <NavBar />
  <RouterView />
  <FooterComp />
</template>
<script setup>
import NavBar from './NavBar.vue'
import FooterComp from './FooterComp.vue';
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
