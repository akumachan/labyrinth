<template>
  <div id="app">
    <div id="nav">
      <Bag />
    </div>
    <router-view/>
  </div>
</template>

<script>
import store from '@/store'
import Bag from '@/components/Bag'

export default {
  name: 'App',
  components: {
    Bag,
  },
  computed: {
    store: function () {
      return store
    },
  },
}
</script>
<style>
</style>
