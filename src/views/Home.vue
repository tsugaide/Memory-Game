<script setup>
import { ref } from "vue";
import Time from "@/components/Time.vue";
import Card from "@/components/Card.vue";
import ButtonStart from "@/components/ButtonStart.vue";
import Statisik from "@/components/Statisik.vue";
import ButtonLevel from "@/components/ButtonLevel.vue";
import SideBarLevel from "@/components/SideBarLevel.vue";
import Account from "@/components/Account.vue";
import { auth } from "@/firebase";

const isBtnLevelClick = ref(false);
const level = () => {
  isBtnLevelClick.value = !isBtnLevelClick.value;
};
</script>
<template>
  <Account />
  <Time />
  <ButtonStart />
  <Card />
  <Statisik />
  <ButtonLevel @click="level" />
  <SideBarLevel :hidden="isBtnLevelClick" />
</template>
