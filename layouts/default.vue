<template>
  <div class="flex flex-col justify-between min-h-screen">
    <Header />
    <main class="flex-1 px-[112px] pt-[120px] pb-[140px]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { Header, Footer } from "@/widgets";
</script>
