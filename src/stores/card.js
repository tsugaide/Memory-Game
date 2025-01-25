import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { levelsFunction } from "./dataLevels";

export const cardFunction = defineStore("card", () => {
  const levelsFungsi = levelsFunction();
  const listImg = [
    "cery",
    "hati",
    "headset",
    "jamur",
    "kacamata",
    "kamera",
    "kucingAbu",
    "kucingUngu",
    "peti",
    "stik",
    "twitter",
    "ufo",
  ];
  const randomImage = () => {
    const indexSelect = [];
    for (let index = 0; index < levelsFungsi.levelPick.kartu / 2; ) {
      const randomIndex = Math.floor(Math.random() * listImg.length);
      if (!indexSelect.includes(randomIndex)) {
        indexSelect.push(randomIndex);
        cards.images.push(listImg[randomIndex], listImg[randomIndex]);
        index++;
      }
    }
  };
  const cards = reactive({
    images: [],
    shuffledImages: [],
    selectedIds: [],
    matches: 0,
    win: false,
    lose: false,
  });

  const shuffleImage = () => {
    cards.shuffledImages = [...cards.images];
    for (let i = cards.shuffledImages.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [cards.shuffledImages[i], cards.shuffledImages[randomIndex]] = [
        cards.shuffledImages[randomIndex],
        cards.shuffledImages[i],
      ];
    }
  };

  return { cards, randomImage, shuffleImage };
});
