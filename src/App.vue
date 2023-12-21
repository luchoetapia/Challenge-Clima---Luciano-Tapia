<script setup>
import { RouterView } from 'vue-router'
import Topbar from "./components/topbar/Topbar-Component.vue"
</script>

<template>
  <header>
    <Topbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>