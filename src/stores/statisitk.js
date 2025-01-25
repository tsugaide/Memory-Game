import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import { timeFunction } from "./time.js";
import { levelsFunction } from "./dataLevels.js";
import { cardFunction } from "./card.js";

export const statFunction = defineStore("statistik", () => {
  const levelFactor = reactive({
    "4 X 2": 1,
    "4 X 3": 1.5,
    "4 X 4": 2,
    "5 X 4": 3,
  });

  const skor = computed(() =>
    Math.round(
      ((levelFactor[levelsFunction().levelPick.desk] *
        levelsFunction().levelPick.waktu) /
        (statistikMenang[1].value + statistikMenang[2].value)) *
        100
    )
  );
  const statistikMenang = reactive([
    { title: "Level", value: computed(() => levelsFunction().levelPick.desk) },
    {
      title: "Waktu",
      value: computed(
        () => levelsFunction().levelPick.waktu - timeFunction().time
      ),
      desk: "detik",
    },
    { title: "Percobaan", value: 0, desk: "kali" },
    {
      title: "Akurasi",
      value: computed(() =>
        Math.floor(
          (levelsFunction().levelPick.kartu / 2 / statistikMenang[2].value) *
            100
        )
      ),
      desk: "%",
    },
    {
      title: "Skor",
      value: skor,
      desk: "point",
    },
  ]);

  const statistikKalah = reactive([
    { title: "Level", value: computed(() => levelsFunction().levelPick.desk) },
    { title: "Benar", value: computed(() => cardFunction().cards.matches) },
  ]);

  return { statistikMenang, statistikKalah, levelFactor, skor };
});
