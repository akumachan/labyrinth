<template>
  <div id="bag">
    <span>あなたが見つけた宝石: </span>
    <span v-if="store.state.hasRedStone">🔴</span>
    <span v-if="store.state.hasYellowStone">🟡</span>
    <span v-if="store.state.hasBlueStone">🔵</span>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Bag',
  computed: {
    store: function () {
      return store
    }
  }
}
</script>

<style scoped>
#bag {
  background-color: aliceblue;
  border: 10px solid black;
}
</style>
