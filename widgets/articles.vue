<template>
  <h2 class="heading-text">Articles</h2>
  <div v-if="isLoading">Loading...</div>
  <div v-if="isError">Something went wrong fetching articles</div>
  <ul
    class="grid grid-cols-4 gap-x-8 gap-y-12 my-[50px]"
    v-if="isSuccess && !!data"
  >
    <li v-for="post in data[currentPage]" :key="post.id">
      <NuxtLink :to="`/articles/${post.id}`">
        <UiPost :item="post" />
      </NuxtLink>
    </li>
  </ul>

  <ul v-if="isSuccess && !!data" class="flex gap-2">
    <li v-if="currentPage !== 0">
      <button
        @click="currentPage--"
        class="h-[44px] w-[44px] flex items-center justify-center rounded-xl border-secondaryGray border-2"
      >
        <img src="/arrow.svg" alt="#" class="rotate-180" />
      </button>
    </li>

    <li v-for="(_, idx) in data">
      <button
        @click="currentPage = idx"
        type="button"
        :class="[
          'bg-secondaryGray h-[44px] w-[44px] flex items-center justify-center text-primaryBlack rounded-xl',
          {
            '!bg-primaryBlack !text-primaryWhite': currentPage === idx,
          },
        ]"
        :key="`page-${idx}`"
      >
        {{ idx + 1 }}
      </button>
    </li>

    <li v-if="currentPage !== data.length - 1">
      <button
        @click="currentPage++"
        class="h-[44px] w-[44px] flex items-center justify-center rounded-xl border-secondaryGray border-2"
      >
        <img src="/arrow.svg" alt="#" />
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useGetAllPosts } from "@/entities";
import { UiPost } from "@/common/ui";

const { data, isSuccess, isLoading, isError } = useGetAllPosts();

const currentPage = ref(0);

watch(currentPage, () => {
  window.scrollTo({
    top: 120,
    behavior: "smooth",
  });
});
</script>
