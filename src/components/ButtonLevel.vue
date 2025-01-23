<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["click"]);

const levelClick = () => {
  emit("click");
};
</script>
<template>
  <div class="absolute top-10 left-10">
    <button @click="levelClick" class="text-sm">Pilih Level</button>
  </div>
</template>
