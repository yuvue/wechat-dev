<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$store.dispatch("connect");
  }
};
</script>

<style lang="less">
#app {
  background-color: @bg;
  min-height: 100vh;
}
</style>
