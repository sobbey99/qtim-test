<template>
  <div
    class="post relative transition-transform duration-300 hover:-translate-y-6"
  >
    <div class="absolute top-2 right-2 font-black text-white">
      ID: {{ item.id }}
    </div>
    <div class="absolute top-6 right-2 font-black text-red-600">
      Image urls 404, inserted placeholder img
    </div>

    <img src="/placeholder.png" alt="#Image unavailable" class="mb-6 w-full" />
    <p
      class="text-primaryBlack text-[20px] h-[80px] overflow-hidden line-clamp-3"
    >
      {{ item.description }}
    </p>
    <div class="read text-secondaryPurple text-[20px]">Read more</div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "../types";

interface IProps {
  item: Post;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.read {
  opacity: 0;
  transition: opacity 0.3s ease;
  position: absolute;
  bottom: -40px;
}

.post {
  position: relative;
  &:hover {
    .read {
      opacity: 1;
    }
  }
}
</style>
