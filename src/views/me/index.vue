<template>
  <div @click="edit"><Me></Me></div>
</template>

<script>
import Me from "./components/Me";

export default {
  name: "chat",
  components: {
    Me
  },
  methods: {
    edit() {
      this.$router.push("/me/edit");
    }
  }
};
</script>

<style scoped lang="less"></style>
