// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"; // Import komponen
import SignUp from "@/views/SignUp.vue";
import LogIn from "@/views/LogIn.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/login", name: "LogIn", component: LogIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
