<template>
  <div class="t-c" @click="() => this.$emit('panelClick')">
    <i :class="icon" v-if="icon"></i>
    <span>&nbsp;&nbsp;{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "ButtonPanel",
  props: ["text", "icon"]
};
</script>

<style scoped>
.t-c {
  width: 100%;
  padding: 14px 20px;
  background: white;
  font-size: 1.6rem;
  margin-bottom: 1px;
}
</style>
