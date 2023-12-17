<script setup>
import { RouterView } from 'vue-router'
import Topbar from "./components/topbar/Top-bar.vue"
</script>

<template>
  <header>
    <Topbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
  body {
    background-color: #24252A;
  }
</style>