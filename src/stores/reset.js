import { defineStore } from "pinia";
import { ref } from "vue";
import { timeFunction } from "./time";
import { cardFunction } from "./card";
import { levelsFunction } from "./dataLevels";
import { statFunction } from "./statisitk";

export const resetFunction = defineStore("reset-card", () => {
  const isReset = ref(false);

  const reset = () => {
    isReset.value = true;
    timeFunction().time = levelsFunction().levelPick.waktu;
    cardFunction().cards.selectedIds = [];
    cardFunction().cards.images = [];
    cardFunction().cards.win = false;
    cardFunction().cards.lose = false;
    cardFunction().cards.matches = 0;
    cardFunction().randomImage();
    cardFunction().shuffleImage();
    statFunction().statistikMenang[2].value = 0;
  };

  return { isReset, reset };
});
