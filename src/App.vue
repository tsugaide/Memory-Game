<script setup>
import { ref } from "vue";
import Time from "@/components/Time.vue";
import Card from "@/components/Card.vue";
import ButtonStart from "./components/ButtonStart.vue";
import Statisik from "./components/Statisik.vue";
import ButtonLevel from "./components/ButtonLevel.vue";
import SideBarLevel from "./components/SideBarLevel.vue";

const jmlBtnLevelClick = ref(0);
const level = () => {
  if (jmlBtnLevelClick.value < 2) {
    jmlBtnLevelClick.value++;
    console.log(jmlBtnLevelClick.value);
  } else {
    jmlBtnLevelClick.value = 0;
  }
};
</script>
<template>
  <Time />
  <ButtonStart />
  <Card />
  <Statisik />
  <ButtonLevel @click="level" />
  <SideBarLevel :hidden="jmlBtnLevelClick" />
</template>
