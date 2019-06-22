<template>
  <div id="app-container">
    <div id="app">
      <keep-alive include="Moment">
        <router-view></router-view>
      </keep-alive>
    </div>
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

#app-container {
  width: 100%;
  background-color: #ccc;
  height: 100vh;
}

#app {
  background: #f2f2f2;
  height: 100vh;
}

@media (min-width: 1100px) {
  #app {
    width: 54%;
    .x-ctr;
  }
}
</style>
