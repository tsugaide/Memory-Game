<script setup>
import { ref } from "vue";
import Time from "@/components/Time.vue";
import Card from "@/components/Card.vue";
import ButtonStart from "@/components/ButtonStart.vue";
import Statisik from "@/components/Statisik.vue";
import ButtonLevel from "@/components/ButtonLevel.vue";
import SideBarLevel from "@/components/SideBarLevel.vue";
import Account from "@/components/Account.vue";
import LeaderboardBtn from "@/components/LeaderboardBtn.vue";

const isBtnLevelClick = ref(false);
const level = () => {
  isBtnLevelClick.value = !isBtnLevelClick.value;
};
</script>
<template>
  <div class="flex justify-end mr-7">
    <div class="flex mt-9 justify-between w-1/2">
      <LeaderboardBtn />
      <Account />
    </div>
  </div>
  <Time />
  <ButtonStart />
  <Card />
  <Statisik />
  <ButtonLevel @click="level" />
  <SideBarLevel :hidden="isBtnLevelClick" />
</template>
