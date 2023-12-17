<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Topbar from "./components/topbar/topbar.vue"
</script>

<template>
  <header>
    <Topbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>