<template>
  <div>
    <BaseHeader text="瞬间"> </BaseHeader>
    <main class="main-top main-bottom"><Card></Card></main>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import Card from "c/MomentCard";
import BaseHeader from "c/app/BaseHeader";
import BaseFooter from "c/app/BaseFooter";

export default {
  name: "chat",
  components: {
    Card,
    BaseFooter,
    BaseHeader
  }
};
</script>

<style scoped lang="less"></style>
