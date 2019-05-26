<template>
  <div id="app-container">
    <div id="app"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$store.dispatch("connect");
    // setInterval(() => {
    //   console.log(document.scrollingElement.scrollTop);
    //   console.dir(document.querySelector("#app > div > main"));
    // }, 5000);
  }
};
</script>

<style lang="less">
@import "~css/global";
#app {
  background-color: @bg;
  height: 100vh;
}

@media (min-width: 1000px) {
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
