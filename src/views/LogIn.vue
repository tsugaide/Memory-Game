<script setup>
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const submitForm = () => {
  logIn(email.value, password.value, name.value);
  email.value = "";
  password.value = "";
};
const logIn = async (email, password, displayName) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: displayName });
    router.push(`/`);
  } catch (error) {
    console.error("Error creating user", error);
  }
};
</script>
<template>
  <h1>Log In</h1>
  <form action="">
    <label for="name">Name:</label>
    <input
      type="text"
      id="name"
      v-model="name"
      required
      placeholder="Buat username mu"
    />
    <br />
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />
    <br />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />
    <br />
    <button type="submit" @click.prevent="submitForm">Log In</button>
  </form>
</template>
