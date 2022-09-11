<template>
  <div>
    <PickedMotivationOptions :pickedCards="pickedCards" @unpickCard="unpickCard"/>
    <MotivationOptions :pickedCards="pickedCards" @pickCard="pickCard"/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      pickedCards: []
    }
  },
  methods: {
    pickCard(name) {
      if (this.pickedCards.length < 5) this.pickedCards.push(name);
    },
     unpickCard(name) {
      const copyOfPickedCards = this.pickedCards
      copyOfPickedCards.splice(this.pickedCards.indexOf(name), 1)
    },
  }
}
</script>



