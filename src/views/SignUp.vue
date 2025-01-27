<script setup>
import { ref } from "vue";
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { RouterLink } from "vue-router";
import {
  set,
  onValue,
  query,
  get,
  orderByChild,
  equalTo,
} from "firebase/database";
import { ref as dbRef } from "firebase/database";

const name = ref("");
const email = ref("");
const password = ref("");
const isSignUp = ref(false);
const usernameUse = ref(false);
const wrongEmail = ref(false);
const nameRef = dbRef(db, "players");

const submitForm = () => {
  const playerQuery = query(nameRef, orderByChild("name"), equalTo(name.value));

  get(playerQuery).then((snapshot) => {
    if (snapshot.exists()) {
      usernameUse.value = true;
      console.log("username sudah di gunakan");
    } else {
      signUp(email.value, password.value, name.value);
      email.value = "";
      password.value = "";
      name.value = "";
    }
  });
};
const signUp = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: displayName });

    const playersRef = dbRef(db, `players/${userCredential.user.uid}`);
    const playerData = {
      name: displayName,
      score: 0,
    };

    await set(playersRef, playerData)
      .then(() => {
        console.log("Data berhasil ditambahkan!");
      })
      .catch((error) => {
        console.error("Gagal menambahkan data:", error);
      });

    isSignUp.value = true;
    usernameUse.value = false;
  } catch (error) {
    wrongEmail.value = true;
    console.error("Error creating user", error);
  }
};
</script>
<template>
  <h1>Sign Up</h1>
  <h1 class="text-red-600 text-xs" v-if="usernameUse">
    username sudah di gunakan
  </h1>
  <h1 class="text-red-600 text-xs" v-if="wrongEmail">email salah</h1>
  <form action="">
    <label for="name">Username:</label>
    <input type="text" id="name" v-model="name" required />
    <br />
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
