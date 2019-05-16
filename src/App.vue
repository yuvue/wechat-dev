<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "view/layout";

export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style lang="less">
#app {
  background-color: @bg;
  min-height: 100vh;
}
</style>
