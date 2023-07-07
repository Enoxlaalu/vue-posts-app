<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header></Header>

  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style scoped>
 .main {
   padding: 12px;
 }
</style>
