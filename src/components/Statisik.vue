<script setup>
import { cardFunction } from "@/stores/card.js";
import { statFunction } from "@/stores/statisitk.js";
import Menang from "./Menang.vue";
import Kalah from "./Kalah.vue";
const cardFungsi = cardFunction();
</script>
<template>
  <Menang v-if="cardFungsi.cards.win" />
  <Kalah v-if="cardFungsi.cards.lose" />
</template>
