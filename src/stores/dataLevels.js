import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";
export const levelsFunction = defineStore("level-data", () => {
  const id = ref(0);
  const levels = reactive([
    {
      waktu: 40,
      kartu: 12,
      cols: 4,
      desk: "4 X 3",
    },
    {
      waktu: 55,
      kartu: 16,
      cols: 4,
      desk: "4 X 4",
    },
    {
      waktu: 80,
      kartu: 20,
      cols: 5,
      desk: "5 X 4",
    },
    {
      waktu: 90,
      kartu: 25,
      cols: 5,
      desk: "6 X 5",
    },
  ]);

  const levelPick = ref({ ...levels[id.value] });

  watch(
    () => id.value,
    (newid) => {
      levelPick.value = { ...levels[newid] };
    }
  );

  return { levels, id, levelPick };
});
