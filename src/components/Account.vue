<script setup>
import Avatar from "./Avatar.vue";
import AccountInf from "./AccountInf.vue";
import AccountInf2 from "./AccountInf2.vue";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
import { auth } from "@/firebase";

const avatarClick = ref(false);

const isLogin = ref(false);

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLogin.value = true;
  } else {
    isLogin.value = false;
  }
});
</script>

<template>
  <div class="flex justify-end mx-10 mt-10">
    <Avatar @click="avatarClick = !avatarClick" />
  </div>
  <template v-if="avatarClick">
    <AccountInf v-if="!isLogin" />
    <AccountInf2 v-if="isLogin" />
  </template>
</template>
