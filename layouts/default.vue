<template>
  <div class="flex flex-col justify-between min-h-screen">
    <Header />
    <slot class="flex-1" />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { Header, Footer } from "@/widgets";
</script>
