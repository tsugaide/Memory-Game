<script setup>
import { timeFunction } from "@/stores/time";
import { computed } from "vue";

const currentTime = timeFunction();
</script>
<template>
  <h1 class="font-pixelify text-6xl text-[#4caf50] text-center mt-24">
    {{ currentTime.time }}
  </h1>
</template>
