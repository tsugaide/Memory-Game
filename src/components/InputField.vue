<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  modalValue: String,
  title: String,
  type: {
    type: String,
    default: "text",
  },
  max: {
    type: Number,
    default: 255,
  },
});

const emit = defineEmits(["update:modalValue"]);
</script>

<template>
  <div>
    <div class="flex gap-2 items-center">
      <h1 class="text-white font-pixelify font-thin ml-3">{{ title }}</h1>
      <slot></slot>
    </div>
    <input
      class="w-72 h-8 mt-1 bg-[#86D4FF] outline-none px-2"
      style="box-shadow: inset 5px 0 0 #237fb1, inset 0 5px 0 #237fb1"
      :type="type"
      :maxlength="max"
      :value="modalValue"
      @input="emit('update:modalValue', $event.target.value)"
      required
    />
  </div>
</template>
