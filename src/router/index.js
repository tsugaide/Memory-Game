// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"; // Import komponen
import SignUp from "@/views/SignUp.vue";
import LogIn from "@/views/LogIn.vue";
import Leaderboard from "@/views/Leaderboard.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/login", name: "LogIn", component: LogIn },
  { path: "/leaderboard", name: "Leaderboard", component: Leaderboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
