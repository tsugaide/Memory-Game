<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="absolute right-6 top-20 flex flex-col items-start justify-center gap-4 pl-2 bg-[#ED7793] w-32 h-20"
  >
    <div class="flex gap-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="flex-shrink-0 h-6 w-6"
      >
        <path
          fill="#ffffff"
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
        />
      </svg>
      <router-link to="/signup" class="flex-shrink-0 text-white font-pixelify"
        >Sign Up</router-link
      >
    </div>
    <div class="flex gap-2 items=center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="flex-shrink-0 h-6 w-6"
      >
        <path
          fill="#ffffff"
          d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
        />
      </svg>
      <router-link to="/login" class="flex-shrink-0 text-white font-pixelify"
        >Log In</router-link
      >
    </div>
  </div>
</template>
