import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";
export const levelsFunction = defineStore("level-data", () => {
  const id = ref(0);
  const levels = reactive([
    {
      waktu: 15,
      kartu: 8,
      cols: 4,
      desk: "4 X 2",
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

  const levelPick = computed(() => levels[id.value]);

  return { levels, id, levelPick };
});
