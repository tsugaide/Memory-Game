<script setup>
import { statFunction } from "@/stores/statisitk.js";
import { resetFunction } from "@/stores/reset";

const stats = statFunction();

const reset = () => {
  resetFunction().reset();
};
</script>
<template>
  <div class="w-52 h-72 absolute left-[50%] -translate-x-[50%] top-32">
    <div class="relative">
      <img src="../assets/BorderStat.svg" alt="" class="w-full" />
      <div>
        <div
          class="absolute left-[50%] -translate-x-[50%] top-8 flex justify-center items-center"
        >
          <img src="../assets/win.png" alt="" class="w-10 h-8" />
          <h1
            class="text-lg font-semibold font-pixelify text-[#c1440e] text-center leading-4"
          >
            Kamu Menang
          </h1>
          <img src="../assets/win.png" alt="" class="w-10 h-8" />
        </div>
        <div class="absolute top-20 text-xs text-[#fefaf8] left-9">
          <ul>
            <li v-for="stat in stats.statistikMenang" class="mb-1">
              {{ stat.title }}: {{ stat.value }} {{ stat.desk }}
            </li>
          </ul>
        </div>
        <button
          @click="reset"
          class="absolute left-[50%] -translate-x-[50%] bottom-9 w-6"
        >
          <img src="../assets/button.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
