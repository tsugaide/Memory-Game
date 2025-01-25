import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { levelsFunction } from "./dataLevels";
import { cardFunction } from "./card";

export const timeFunction = defineStore("waktu", () => {
  const levelsFungsi = levelsFunction();
  const cardFungsi = cardFunction();
  const time = ref(levelsFungsi.levelPick.waktu);
  const finish = ref(true);
  let interval;
  const start = () => {
    interval = setInterval(() => {
      time.value--;
      if (time.value <= 0) {
        stop();
        cardFungsi.cards.lose = true;
      }
    }, 900);
  };

  const stop = () => {
    finish.value = true;
    clearInterval(interval);
  };

  return { start, time, finish, stop };
});
