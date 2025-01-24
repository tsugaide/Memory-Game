<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["click"]);

const levelClick = () => {
  emit("click");
};
</script>
<template>
  <div class="absolute top-10 left-10">
    <button
      @click="levelClick"
      class="text-sm text-center text-white bg-[url(/src/assets/btnLevel.svg)] w-20 h-10 bg-contain bg-no-repeat bg-center"
    >
      Pilih Level
    </button>
  </div>
</template>
