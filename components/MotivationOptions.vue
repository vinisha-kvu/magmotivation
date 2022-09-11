<template>
  <div class="w-screen h-screen/2 bg-berry-deep relative">
  <vue-horizontal class="this absolute vertical-center">

      <img
        @click="pickCard(img.name)"
        v-for="img in cardsToShow"
        :src="img.src"
        :key="img.name"
        class="rounded-lg cursor-pointer"
      />

  </vue-horizontal>
  </div>
</template>

<script>
import { cards } from "./cards";
export default {
  name: "MotivationOptions",
  props: ["pickedCards"],
  data() {
    return {
      cards,
    };
  },
  methods: {
    pickCard(name) {
      this.$emit("pickCard", name);
    },
  },
  computed: {
    cardsToShow() {
      const cardsNotPicked = [];
      const cards = this.cards;
      const pickedCards = this.pickedCards;
      for (const card of cards) {
        const cardHasNotBeenPicked = !pickedCards.includes(card.name);

        if (cardHasNotBeenPicked) cardsNotPicked.push(card);
      }
      return cardsNotPicked; //test
    },
  },
};
</script>

<style scoped>
img {
  margin: 50px 12px;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.first {
  margin-left: 10px;
}
.this >>> .v-hl-btn-next {
 margin-right: 40px;
}
.this >>> .v-hl-btn-prev {
 margin-left: 30px;
}
.this >>> .v-hl-btn-next svg {
  margin: 0;
  padding: 4px;
  height: 40px;
  width: 40px;
  color: white;
  background: #F806CC;
}
.this >>> .v-hl-btn-prev svg {
  margin: 0;
  padding: 4px;
  height: 40px;
  width: 40px;
  background: #F806CC;
  color: white;
}
img {
  transition: transform .2s;
  width: 300px;
  height: 300px;
}
img:hover {
  transform: scale(1.125);
  cursor: pointer;
}

</style>
