<template>
  <header class="px-10 py-9">
    <div class="flex justify-between items-center">
      <NuxtLink href="/">
        <img src="/logo.svg" alt="logo" class="w-[85px] h-[25px]" />
      </NuxtLink>

      <nav class="flex items-center gap-[90px]">
        <ul class="flex gap-14">
          <li v-for="link in nav_links" :key="link.label">
            <NuxtLink class="text-primaryBlack text-[20px]" :to="link.href">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex gap-4">
          <div
            class="border-black border-opacity-10 border-[2px] rounded-full p-3"
          >
            <img src="/uk.svg" alt="#" />
          </div>
          <UiButton>Let's work</UiButton>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { UiButton } from "@/common/ui";

const nav_links = [
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "About",
    href: "/about",
  },
];
</script>

<style></style>
