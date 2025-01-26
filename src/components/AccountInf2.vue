<script setup>
import { ref } from "vue";
import { auth } from "@/firebase";
const logOut = async () => {
  try {
    await signOut(auth);
    alert("logOut berhasil");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};

const user = auth.currentUser;
const name = ref("");
if (user) {
  name.value = user.displayName; // Nama pengguna
}
</script>
<template>
  <div
    class="absolute right-10 flex flex-col justify-center gap-4 bg-blue-400 p-3"
  >
    <div class="flex gap-2 items-center">
      <h1 class="flex-shrink-0">{{ name }}</h1>
    </div>
    <div class="flex gap-2 items=center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="flex-shrink-0 h-6 w-6"
      >
        <path
          fill="#d0d1d2"
          d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
        />
      </svg>
      <button class="flex-shrink-0" @click="logOut">Log Out</button>
    </div>
  </div>
</template>
