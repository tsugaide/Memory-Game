<script setup>
import { db } from "@/firebase";
import { query, get, orderByChild, limitToFirst } from "firebase/database";
import { ref as dbRef } from "firebase/database";
import { reactive } from "vue";

const players = reactive([]);
const playersRef = dbRef(db, "players");

const playersQuery = query(playersRef, orderByChild("score"), limitToFirst(20));
get(playersQuery)
  .then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        players.push({ ...child.val() });
      });
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });
</script>
<template>
  <h1>leaderboard</h1>
  <ul>
    <li v-for="(player, index) in players" :key="index">
      {{ index + 1 }} {{ player.name }}: {{ player.score }}
    </li>
  </ul>
</template>
