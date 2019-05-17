<template>
  <div id="panel">
    <slot name="panel-name"></slot>
    <div class="right">
      <slot name="panel-info"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    placement: String
  }
};
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
  margin-bottom: 1px;
}

.right {
  margin-right: 10px;
}
</style>
