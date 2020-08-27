<template>
  <div class="message">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Message',
}
</script>

<style scoped>
.message {
  background-color: darkblue;
  color: springgreen;
  text-align: center;
}
</style>