<script setup>
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isError = ref(false);
const email = ref("");
const password = ref("");
const submitForm = () => {
  logIn(email.value, password.value);
  email.value = "";
  password.value = "";
};
const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    router.push(`/`);
  } catch (error) {
    isError.value = true;
    console.error(error);
  }
};
</script>
<template>
  <h1>Log In</h1>
  <h1 class="text-red-600 text-xs" v-if="isError">
    Username atau paswword salah
  </h1>
  <form action="">
    <label for="name">Email:</label>
    <input type="email" id="name" v-model="email" required />
    <br />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />
    <br />
    <button type="submit" @click.prevent="submitForm">Log In</button>
  </form>
</template>
