<template>
    <div class="w-screen h-screen/2 bg-berry-mid">
    <div class="center-text"><h1 class="text-white text-xl">Was motiviert mich?</h1></div>
    <div class=" pt-4 flex items-center max-w-full overflow-x-auto justify-center">
    <draggable>
        <transition-group class="flex">
    <img
      v-for="img in cardsToShow"
      :key="img.name"
      :src="img.src"
      alt="picture describing the motivation"
      class="rounded-lg cursor-pointer mr-3 ml-3"
      @click="unpickCard(img.name)"
    />
      </transition-group>
    </draggable>
    </div>

    </div>
</template>

<script>
    import { cards } from "./cards";
export default {
  name: "PickedMotivationCards",
  props: ["pickedCards"],
  data() {
    return {
      cards,
    };
  },
  methods: {
    unpickCard(name) {
      this.$emit("unpickCard", name);
    },
  },
  computed: {
    cardsToShow() {
      const cardsPickedArr = [];
      const cards = this.cards;
      const pickedCards = this.pickedCards;
      for (const card of cards) {
        const cardHasBeenPicked = pickedCards.includes(card.name);
        if (cardHasBeenPicked && cardsPickedArr.length < 5) cardsPickedArr.push(card);
      }
      return cardsPickedArr;
    },
  },
}
</script>

<style scoped>
img {
    width: 315px;
    height: 315px;

}
.center-text {
    text-align: center;
    padding-top: 20px;

}
h1 {
    font-family: "Lucida Console", "Courier New", monospace;
}



</style>
