<script setup>
import { ref } from "vue";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { RouterLink } from "vue-router";

const email = ref("");
const password = ref("");
const isSignUp = ref(false);
const submitForm = () => {
  signUp(email.value, password.value);
  email.value = "";
  password.value = "";
};
const signUp = async (email, password) => {
  try {
    isSignUp.value = true;
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error creating user", error);
  }
};
</script>
<template>
  <h1>Sign Up</h1>
  <form action="">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />
    <br />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />
    <br />
    <button type="submit" @click.prevent="submitForm">Sign Up</button>
  </form>
  <router-link v-if="isSignUp" to="/login">Login</router-link>
</template>
