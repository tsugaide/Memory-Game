<script setup>
import { ref } from "vue";
import Time from "@/components/Time.vue";
import Card from "@/components/Card.vue";
import ButtonStart from "./components/ButtonStart.vue";
import Statisik from "./components/Statisik.vue";
import ButtonLevel from "./components/ButtonLevel.vue";
import SideBarLevel from "./components/SideBarLevel.vue";

const isBtnLevelClick = ref(false);
const level = () => {
  isBtnLevelClick.value = !isBtnLevelClick.value;
};
</script>
<template>
  <Time />
  <ButtonStart />
  <Card />
  <Statisik />
  <ButtonLevel @click="level" />
  <SideBarLevel :hidden="isBtnLevelClick" />
</template>
