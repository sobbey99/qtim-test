<template>
  <div v-if="isLoading">Loading...</div>
  <div v-if="isError">Something went wrong fetching articles</div>

  <div v-if="isSuccess && !!data">
    <h1 class="heading-text">{{ data.title }}</h1>
    <img
      src="/placeholder.png"
      alt="#Unavailable image"
      class="w-full h-[700px] object-cover mb-[80px]"
    />

    <div class="regular-text mb-8">About</div>

    <p class="text-primaryBlack text-[36px]">
      {{ data.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useGetPostById } from "@/entities";

const { id } = useRoute().params;

const { data, isSuccess, isLoading, isError } = useGetPostById(`${id}`);
</script>
