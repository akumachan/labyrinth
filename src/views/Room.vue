<template>
  <Message v-if="message">{{ message }}</Message>
  <div class="room">
    <router-link :to="left"><div class="signage">左の扉</div><div class="door"></div></router-link>
    <router-link :to="right"><div class="signage">右の扉</div><div class="door"></div></router-link>
    <router-link to="/goal" v-if="store.getters.hasAllStones"><div class="signage">真の扉</div><div class="door"></div></router-link>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import Message from '@/components/Message'

export const roomPath = '/room/'
const redStoneRoom = '12'
const yellowStoneRoom = '17'
const blueStoneRoom = '29'

export default {
  name: 'Room',
  components: {
    Message
  },
  beforeRouteUpdate (to) {
    store.dispatch('updateCurrentLocation', to.params.id)
    if (Number(to.params.id) > 30) {
      this.$route.params.id = 0
      router.push(`${roomPath}0`)
    }
  },
  computed: {
    store: function () {
      return store
    },
    left: function () {
      return `${roomPath}${Number(this.$route.params.id) * 2 + 1}`
    },
    right: function () {
      return `${roomPath}${Number(this.$route.params.id) * 2 + 2}`
    },
    isRedStoneRoom: function () {
      const is = store.state.currentLocation === redStoneRoom && !store.state.hasRedStone
      if (is) {
        store.dispatch('acquireRedStone')
      }
      return is
    },
    isYellowStoneRoom: function () {
      const is = store.state.currentLocation === yellowStoneRoom && !store.state.hasYellowStone
      if (is) {
        store.dispatch('acquireYellowStone')
      }
      return is
    },
    isBlueStoneRoom: function () {
      const is = store.state.currentLocation === blueStoneRoom && !store.state.hasBlueStone
      if (is) {
        store.dispatch('acquireBlueStone')
      }
      return is
    },
    message: function () {
      if (store.state.currentLocation === '0') {
        return '最初の部屋だ。'
      } else if (this.isRedStoneRoom) {
        return '赤い宝石を手に入れた。'
      } else if (this.isYellowStoneRoom) {
        return '黄色い宝石を手に入れた。'
      } else if (this.isBlueStoneRoom) {
        return '青い宝石を手に入れた。'
      }
      return ''
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.room {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.door {
  height: 100px;
  width: 60px;
  background-color: brown;
  -webkit-border-radius: 20px 20px 0 0;
  -moz-border-radius: 20px 20px 0 0;
  border-radius: 20px 20px 0 0;
  border: 10px inset black;;
  padding: 10px;
  margin: 10px;
}
.signage {
  text-align: center;
}
</style>
