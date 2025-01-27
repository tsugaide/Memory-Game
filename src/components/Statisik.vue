<script setup>
import { cardFunction } from "@/stores/card.js";
import { statFunction } from "@/stores/statisitk.js";
import { computed, ref, watch } from "vue";
import { update, get } from "firebase/database";
import { ref as dbRef } from "firebase/database";
import { db, auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Menang from "./Menang.vue";
import Kalah from "./Kalah.vue";
const cardFungsi = cardFunction();
const statFungsi = statFunction();

onAuthStateChanged(auth, (user) => {
  if (user) {
    watch(
      () => cardFungsi.cards.win,
      (newValue) => {
        if (newValue) {
          const dataRef = dbRef(db, `players/${user.uid}`);

          const newData = {
            score: statFungsi.statistikMenang[4].value,
          };

          get(dataRef).then((snapshot) => {
            if (snapshot.exists()) {
              if (snapshot.val().score < newData.score) {
                update(dataRef, newData)
                  .then(() => {
                    console.log("Data has been updated!");
                  })
                  .catch((error) => {
                    console.error("Error updating document: ", error);
                  });
              }
            }
          });
        }
      }
    );
  }
});
</script>
<template>
  <Menang v-if="cardFungsi.cards.win" />
  <Kalah v-if="cardFungsi.cards.lose" />
</template>
