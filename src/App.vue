<template>
  <div id="app-container">
    <div id="app"><router-view></router-view></div>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
  name: 'app',
  mounted() {
    const cookies = new Cookies()
    !cookies.get('wechat') && this.$router.push('/login')
    this.$store.dispatch('connect')
  },
}
</script>

<style lang="less">
@import '~css/global';
#app {
  background-color: @bg;
  height: 100vh;
}

@media (min-width: 1100px) {
  #app {
    width: 54%;
    .x-ctr;
  }

  #app-container {
    width: 100%;
    background-color: #ccc;
    height: 100vh;
  }
}
</style>
