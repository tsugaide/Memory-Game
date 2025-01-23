import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import { timeFunction } from "./time.js";
import { levelsFunction } from "./dataLevels.js";
import { cardFunction } from "./card.js";

export const statFunction = defineStore("statistik", () => {
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
  ]);

  const statistikKalah = reactive([
    { title: "Level", value: computed(() => levelsFunction().levelPick.desk) },
    { title: "Benar", value: computed(() => cardFunction().cards.matches) },
  ]);

  return { statistikMenang, statistikKalah };
});
