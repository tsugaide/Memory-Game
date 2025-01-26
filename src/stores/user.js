import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const userFunction = defineStore("user", () => {
  const userData = reactive({
    userName: "",
    email: "",
    password: "",
    score: "",
  });

  return {
    userData,
  };
});
