<template>
  <div id="start">
    <div id="start-message">🔴🟡🔵の3つの秘宝を集めて脱出せよ！</div>
    <router-link to='/room/0'><button>突入！</button></router-link>
  </div>
</template>

<script>

export default {
  name: 'Start',
}
</script>

<style scoped>
#start {
  margin-top: 20px;
  text-align: center;
}
</style>

