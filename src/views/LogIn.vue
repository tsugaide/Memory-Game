<script setup>
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";
import InputField from "@/components/InputField.vue";
import HiasanPage from "@/components/HiasanPage.vue";

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
  <h1 class="text-center text-4xl font-bold font-pixelify mt-10">Log In</h1>
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
        <img src="../assets/logInImg.png" alt="" class="w-32" />
      </div>
      <h1 class="text-red-500 text-[0.60rem] text-center mt-3" v-if="isError">
        *Email atau Password salah
      </h1>
      <form action="">
        <div class="flex flex-col items-center mt-3 gap-3">
          <input-field v-model:modalValue="email" title="email"> </input-field>
          <input-field
            v-model:modalValue="password"
            title="password"
          ></input-field>
          <button
            type="submit"
            @click.prevent="submitForm"
            class="bg-[url(/src/assets/inputBtn.png)] bg-contain bg-no-repeat bg-center p-5 mt-3 text-[#056F1C] font-pixelify"
          >
            Log In
          </button>
        </div>
      </form>
      <HiasanPage class="" />
    </div>
  </div>
</template>
