<template>
  <div id="panel" @click="() => this.$emit('menuClick')">
    <slot name="name"></slot>
    <div class="right">
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuPanel',
}
</script>

<style scoped>
#panel {
  width: 100%;
  padding: 14px 20px;
  background: white;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
  margin-bottom: 2px;
}

.right {
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
