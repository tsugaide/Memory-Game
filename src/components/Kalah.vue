<script setup>
import { statFunction } from "@/stores/statisitk";
import { resetFunction } from "@/stores/reset";

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
          class="absolute top-8 flex left-[50%] -translate-x-[50%] justify-center items-center gap-1"
        >
          <img src="../assets/lose.png" alt="" class="w-10 h-8" />
          <h1
            class="text-lg font-semibold font-pixelify text-[#c1440e] leading-4 text-center"
          >
            Kamu Kalah
          </h1>
          <img
            src="../assets/lose.png"
            alt=""
            class="w-10 h-8"
            style="transform: translateZ(360deg)"
          />
        </div>
        <div class="absolute top-20 text-xs text-[#fefaf8] left-9">
          <ul>
            <li v-for="stat in statFunction().statistikKalah" class="mb-1">
              {{ stat.title }}: {{ stat.value }}
            </li>
          </ul>
        </div>
        <div class="absolute top-32 mx-6">
          <h1 class="text-center text-xs text-[#c1440e] leading-4">
            “Coba lagi untuk mencocokkan semua pasangan kartu!”
          </h1>
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
