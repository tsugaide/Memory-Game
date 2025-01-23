import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";
export const levelsFunction = defineStore("level-data", () => {
  const id = ref(0);
  const levels = reactive([
    {
      waktu: 20,
      kartu: 9,
      cols: 3,
      desk: "3 X 3",
    },
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
      waktu: 70,
      kartu: 20,
      cols: 5,
      desk: "5 X 4",
    },
  ]);

  const levelPick = computed(() => {
    return levels[id.value];
  });

  return { levels, id, levelPick };
});
