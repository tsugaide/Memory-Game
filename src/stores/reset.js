import { defineStore } from "pinia";
import { ref } from "vue";
import { timeFunction } from "./time";
import { cardFunction } from "./card";
import { levelsFunction } from "./dataLevels";
import { statFunction } from "./statisitk";

export const resetFunction = defineStore("reset-card", () => {
  const timeFungsi = timeFunction();
  const statFungsi = statFunction();
  const cardFungsi = cardFunction();
  const levelsFungsi = levelsFunction();
  const isReset = ref(false);

  const reset = () => {
    isReset.value = true;
    timeFungsi.time = levelsFungsi.levelPick.waktu;
    cardFungsi.cards.selectedIds = [];
    cardFungsi.cards.images = [];
    cardFungsi.cards.win = false;
    cardFungsi.cards.lose = false;
    cardFungsi.cards.matches = 0;
    cardFungsi.randomImage();
    cardFungsi.shuffleImage();
    statFungsi.statistikMenang[2].value = 0;
  };

  return { isReset, reset };
});
