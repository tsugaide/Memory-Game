import { defineStore } from "pinia";
import { ref } from "vue";
import { levelsFunction } from "./dataLevels";
import { cardFunction } from "./card";

export const timeFunction = defineStore("waktu", () => {
  const time = ref(levelsFunction().levelPick.waktu);
  const finish = ref(true);
  let interval;
  const start = () => {
    interval = setInterval(() => {
      time.value--;
      if (time.value <= 0) {
        stop();
        cardFunction().cards.lose = true;
      }
    }, 900);
  };

  const stop = () => {
    finish.value = true;
    clearInterval(interval);
  };

  return { start, time, finish, stop };
});
