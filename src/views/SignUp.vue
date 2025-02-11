<script setup>
import { ref } from "vue";
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "vue-router";
import InputField from "@/components/InputField.vue";
import HiasanPage from "@/components/HiasanPage.vue";
import {
  set,
  onValue,
  query,
  get,
  orderByChild,
  equalTo,
} from "firebase/database";
import { ref as dbRef } from "firebase/database";

const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const usernameUse = ref(false);
const wrongEmail = ref(false);
const nameRef = dbRef(db, "players");

const submitForm = () => {
  if (name.value != "" && email.value != "" && password.value != "") {
    const playerQuery = query(
      nameRef,
      orderByChild("name"),
      equalTo(name.value)
    );
    get(playerQuery).then((snapshot) => {
      if (snapshot.exists()) {
        usernameUse.value = true;
      } else {
        signUp(email.value, password.value, name.value);
        email.value = "";
        password.value = "";
        name.value = "";
      }
    });
  }
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

    await set(playersRef, playerData);
    // .then(() => {})
    // .catch((error) => {});

    usernameUse.value = false;

    router.push("/login");
  } catch (error) {
    wrongEmail.value = true;
    console.error("Error creating user", error);
  }
};
</script>
<template>
  <h1 class="text-center text-4xl font-bold font-pixelify mt-10">Sign Up</h1>
  <div class="flex justify-center mt-3">
    <div
      class="relative w-[22rem] h-[35rem] bg-[#4CB3FF] rounded-lg border-4 border-[#444444] z-20"
    >
      <div class="flex gap-2 ml-5 mt-2">
        <div class="w-5 h-5 bg-[#ED7793]"></div>
        <div class="w-5 h-5 bg-[#86D4FF]"></div>
        <div class="w-5 h-5 bg-[#FFF186]"></div>
      </div>
      <div class="flex justify-center mt-5">
        <img src="../assets/signUpImg.png" alt="" class="w-32" />
      </div>
      <form action="">
        <div class="flex flex-col items-center mt-3 gap-3">
          <input-field v-model:modalValue="name" title="username" :max="15">
            <span v-if="usernameUse" class="text-red-500 text-[0.60rem]">
              *Username sudah di gunakan
            </span>
          </input-field>
          <input-field v-model:modalValue="email" title="email">
            <span v-if="wrongEmail" class="text-red-500 text-[0.60rem]">
              *Email salah
            </span>
          </input-field>
          <input-field
            v-model:modalValue="password"
            title="password"
          ></input-field>
          <button
            type="submit"
            @click.prevent="submitForm"
            class="bg-[url(/src/assets/inputBtn.png)] bg-contain bg-no-repeat bg-center p-5 mt-3 text-[#056F1C] font-pixelify"
          >
            Sign Up
          </button>
        </div>
      </form>
      <HiasanPage />
    </div>
  </div>
</template>
