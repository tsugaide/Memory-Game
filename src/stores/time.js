import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { levelsFunction } from "./dataLevels";
import { cardFunction } from "./card";

export const timeFunction = defineStore("waktu", () => {
  const time = computed(() => levelsFunction().levelPick.waktu);
  const finish = ref(true);
  let interval;
  const start = () => {
    interval = setInterval(() => {
      dynamicTime.value--;
      if (dynamicTime.value <= 0) {
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
