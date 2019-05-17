<template>
  <div>
    <!--没有头部和尾部-->
    <div v-if="layout.blank.includes($route.name)">
      <router-view></router-view>
    </div>
    <!--有头部-->
    <div v-else-if="layout.noFooter.includes($route.name)">
      <Header></Header>
      <main>
        <router-view></router-view>
      </main>
    </div>
    <!--有头部和尾部-->
    <div v-else>
      <Header></Header>
      <main>
        <router-view></router-view>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import layout from "config/layout";

export default {
  name: "Layout",
  components: {
    Header,
    Footer
  },
  data() {
    return { layout };
  }
};
</script>

<style scoped>
main {
  padding-top: 45px;
  padding-bottom: 60px;
}
</style>
