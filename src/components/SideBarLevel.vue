<script setup>
import { defineProps } from "vue";
import { levelsFunction } from "../stores/dataLevels.js";
import { cardFunction } from "@/stores/card.js";
import { timeFunction } from "@/stores/time.js";

const props = defineProps({
  hidden: {
    type: Boolean,
    required: true,
  },
});

const pilihLevel = (levelId) => {
  levelsFunction().id = levelId;
  cardFunction().cards.images = [];
  cardFunction().randomImage();
  cardFunction().shuffleImage();
  timeFunction().time = levelsFunction().levelPick.waktu;
};
</script>
<template>
  <div
    class="bg-[url(/src/assets/level.svg)] bg-no-repeat bg-contain bg-center w-72 h-80 absolute -translate-x-72 top-32 transition-transform"
    :class="{
      'translate-x-0': props.hidden,
    }"
  >
    <h1 class="text-center mt-10">PILIH LEVELMU</h1>
    <div class="flex justify-center gap-4 mt-8 mx-10 flex-wrap">
      <div
        v-for="(item, id) in levelsFunction().levels"
        :key="id"
        @click="pilihLevel(id)"
        class="cursor-pointer flex gap-1 w-20 h-14 bg-[url(/src/assets/BorderLevel.svg)] justify-center items-center bg-center bg-no-repeat bg-contain"
      >
        <div class="flex">
          <div class="w-3 h-3 bg-[#87ceeb] border border-black -rotate-2"></div>
          <div
            class="w-3 h-3 bg-[#87ceeb] border border-black z-10 -ml-1 mt-2 rotate-6"
          ></div>
        </div>
        <h1 class="">{{ item.desk }}</h1>
      </div>
    </div>
  </div>
</template>
