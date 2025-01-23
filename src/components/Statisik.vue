<script setup>
import { cardFunction } from "@/stores/card.js";
import Menang from "./Menang.vue";
import Kalah from "./Kalah.vue";
</script>
<template>
  <Menang v-if="cardFunction().cards.win" />
  <Kalah v-if="cardFunction().cards.lose" />
</template>
