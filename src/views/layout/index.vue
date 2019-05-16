<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

export default {
  name: "layout",
  components: {
    Header,
    Footer,
    Main
  }
};
</script>

<style scoped></style>
