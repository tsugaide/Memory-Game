<script setup>
import { timeFunction } from "@/stores/time.js";
import { cardFunction } from "@/stores/card.js";
import { levelsFunction } from "@/stores/dataLevels";
import { statFunction } from "@/stores/statisitk";
import { resetFunction } from "@/stores/reset";
import { ref, onMounted, watch } from "vue";
const timeStart = timeFunction();
const cardFungsi = cardFunction();
const dataLevel = levelsFunction();
const stat = statFunction();
const divs = ref([]);
const reset = resetFunction();

onMounted(() => {
  divs.value = document.querySelectorAll(".card-inner");
  cardFungsi.randomImage();
  cardFungsi.shuffleImage();
});

watch(
  () => timeStart.finish,
  (newValue) => {
    divs.value = document.querySelectorAll(".card-inner");
    if (!newValue) {
      [...divs.value].forEach((element) => {
        element.classList.add("flip");
      });
      setTimeout(() => {
        [...divs.value].forEach((element) => {
          element.classList.remove("flip");
        });
      }, 1500);
    }
  }
);

const cardClick = (e) => {
  const cardId = e.currentTarget.dataset.id;
  revealCard(cardId);
  if (!cardFungsi.cards.selectedIds.includes(cardId)) {
    cardFungsi.cards.selectedIds.push(cardId);
  }

  if (cardFungsi.cards.selectedIds.length === 2) {
    stat.statistikMenang[2].value++;
    checkMatch();
  }
};

const revealCard = (id) => {
  divs.value[id].classList.add("flip");
};

const hideCard = (id) => {
  divs.value[id].classList.remove("flip");
};

const checkMatch = () => {
  const [first, second] = cardFungsi.cards.selectedIds;

  const benar =
    cardFungsi.cards.shuffledImages[first] ===
    cardFungsi.cards.shuffledImages[second];
  if (benar) {
    cardFungsi.cards.matches++;
    if (cardFungsi.cards.matches === cardFungsi.cards.images.length / 2) {
      setTimeout(() => {
        timeStart.stop();
        cardFungsi.cards.win = true;
      }, 500);
    }
  } else {
    setTimeout(() => {
      hideCard(first);
      hideCard(second);
    }, 500);
  }
  cardFungsi.cards.selectedIds = [];
};

watch(
  () => reset.isReset,
  (newValue) => {
    if (newValue) {
      [...divs.value].forEach((element) => {
        element.classList.remove("flip");
      });
      reset.isReset = false;
    }
  }
);
</script>

<template>
  <div
    class="mt-10 grid gap-3 justify-center"
    :style="{
      gridTemplateColumns: `repeat(${dataLevel.levelPick.cols}, 3.5rem)`,
    }"
  >
    <div
      v-for="(card, id) in dataLevel.levelPick.kartu"
      class="card w-14 h-14 cursor-pointer"
      style="perspective: 1000px"
    >
      <div
        @click="cardClick"
        ref="div"
        :style="{
          pointerEvents: timeStart.finish ? 'none' : 'auto',
        }"
        :data-id="id"
        class="card-inner w-full h-full relative transition-transform duration-500 border-t border-l border-r-[3px] border-b-[3px] border-[#444444] rounded-sm"
        style="transform-style: preserve-3d"
      >
        <div
          class="absolute w-full h-full flex justify-center items-center rounded-sm bg-[#87ceeb]"
          style="backface-visibility: hidden"
        ></div>

        <div
          class="absolute w-full h-full p-2 flex justify-center items-center rounded-sm bg-[#ffd700]"
          style="backface-visibility: hidden; transform: rotateY(180deg)"
        >
          <img
            :src="`/images/${cardFungsi.cards.shuffledImages[id]}.png`"
            alt=""
            class="w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip {
  transform: rotateY(180deg);
}
</style>
