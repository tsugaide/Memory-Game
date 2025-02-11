<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="w-32 h-32 bg-[#E7E254] relative before:w-36 before:h-28 before:absolute before:bg-[#E7E254] before:-z-10 before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2"
  >
    <div class="flex flex-col items-center mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8">
        <path
          fill="#ffffff"
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
        />
      </svg>
      <h1 class="text-white text-xs text-center">{{ name }}</h1>
      <h1 class="text-center text-white text-2xl font-semibold mt-3">
        {{ score }}
      </h1>
    </div>
    <div
      class="absolute flex items-center justify-center w-6 h-4 bg-[#E7E254] -bottom-4 left-1/2 -translate-x-1/2"
    >
      <h1 class="text-[#979432]">{{ rank }}</h1>
    </div>
  </div>
</template>
