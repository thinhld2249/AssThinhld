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

.raleway-font {
  font-family: 'raleway, sans-serif';
}

.cormon-font {
  font-family: cormorantgaramond-light, cormorantgaramond, "cormorant garamond", serif;
}
</style>
