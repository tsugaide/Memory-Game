<script setup>
import { timeFunction } from "@/stores/time.js";
import { ref } from "vue";

const time = timeFunction();
const start = () => {
  time.finish = false;
  setTimeout(() => {
    time.start();
  }, 1500);
};
</script>
<template>
  <div class="flex justify-center relative mt-5">
    <button
      class="bg-green-500 px-3 py-1 rounded-sm text-white absolute block"
      @click="start"
      :class="{ hidden: !time.finish }"
    >
      Start
    </button>
  </div>
</template>
