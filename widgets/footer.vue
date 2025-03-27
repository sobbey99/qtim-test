<template>
  <footer class="px-28 bg-secondaryPurple pt-[140px] pb-[30px] overflow-hidden">
    <div class="flex gap-[350px] mb-[300px]">
      <div class="flex-1">
        <h5 class="regular-text mb-[56px]">Is there a project?</h5>
        <h4
          class="text-primaryBlack text-[112px] max-w-[470px] leading-[110px] underline"
        >
          Let's work together
        </h4>
      </div>

      <div class="flex-1 flex flex-col gap-[36px]">
        <div>
          <h3 class="regular-text mb-4">For all questions</h3>
          <a class="regular-text flex" :href="`tel:${CONTACT_INFO.PHONE}`">
            {{ CONTACT_INFO.PHONE }}
          </a>
          <a class="regular-text flex" :href="`mailto:${CONTACT_INFO.EMAIL}`">
            {{ CONTACT_INFO.EMAIL }}
          </a>
        </div>

        <div v-for="item in office_links" :key="item.label">
          <h3 class="regular-text">Office in {{ item.label }}</h3>
          <p class="regular-text max-w-[140px]">{{ item.address }}</p>
          <a
            target="_blank"
            class="w-8 h-8 rounded-full flex items-center justify-center bg-primaryBlack"
            :href="`https://www.google.com/maps/search/?q=${encodeURIComponent(
              item.address,
            )}`"
          >
            <img class="w-[12px] h-[12px]" src="/cursor.svg" alt="#" />
          </a>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center relative">
      <ul class="flex gap-8">
        <li v-for="item in bottom_links.left" :key="item.label">
          <a :href="item.href" target="_blank" class="regular-text underline">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <ul class="flex gap-8">
        <li v-for="item in bottom_links.right" :key="item.label">
          <a :href="item.href" target="_blank" class="regular-text underline">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <div
        class="absolute w-[350px] h-[350px] bg-primaryBlack rounded-full text-primaryWhite flex justify-center text-2xl left-1/2 -bottom-[185px] -translate-x-1/2 -translate-y-[1/2] pt-[130px]"
      >
        Go
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CONTACT_INFO } from "@/common/constants";

const office_links = [
  {
    label: "Russia",
    address: CONTACT_INFO.OFFICE_RUSSIA,
  },
  {
    label: "Dubai",
    address: CONTACT_INFO.OFFICE_DUBAI,
  },
];

const bottom_links = {
  left: [
    {
      label: "Facebook",
      href: CONTACT_INFO.FACEBOOK,
    },
    {
      label: "Instagram",
      href: CONTACT_INFO.INSTAGRAM,
    },
    {
      label: "Telegram",
      href: CONTACT_INFO.TELEGRAM,
    },
  ],
  right: [
    {
      label: "Behance",
      href: CONTACT_INFO.BEHANCE,
    },
    {
      label: "Linkedin",
      href: CONTACT_INFO.LINKEDIN,
    },
    {
      label: "Privacy Policy",
      href: CONTACT_INFO.PRIVACY_POLICY,
    },
  ],
};
</script>

<style></style>
