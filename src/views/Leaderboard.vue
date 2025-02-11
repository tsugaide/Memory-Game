<script setup>
import { db } from "@/firebase";
import {
  query,
  get,
  orderByChild,
  limitToFirst,
  limitToLast,
} from "firebase/database";
import { ref as dbRef } from "firebase/database";
import { reactive, computed, ref } from "vue";
import Balon from "@/components/Balon.vue";

const players = ref([]);

const playersRef = dbRef(db, "players");

const playersQuery = query(playersRef, orderByChild("score"), limitToFirst(20));
get(playersQuery)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const tempArray = [];
      snapshot.forEach((child) => {
        tempArray.push({ ...child.val() });
      });
      players.value = tempArray.reverse();
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });
</script>
<template>
  <h1 class="font-semibold font-pixelify text-center mt-5 text-2xl">
    Leaderboard
  </h1>
  <div class="flex justify-center flex-col items-center mt-7">
    <Balon
      v-for="(player, index) in players"
      :name="player.name"
      :score="player.score"
      :rank="index + 1"
    />
  </div>
</template>
