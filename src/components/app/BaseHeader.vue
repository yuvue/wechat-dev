<template>
  <div class="header">
    <p class="left">
      <slot name="left"></slot>
    </p>
    <p>{{ text }}</p>
    <p class="right">
      <slot name="right"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  props: ["text"]
};
</script>

<style scoped lang="less">
@import "~css/global.less";
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  padding: 0 10px;
  line-height: 45px;
  text-align: center;
  border-bottom: 1px solid #dedbdb;
  font-size: 1.7rem;
  background-color: #f2f2f2;
  z-index: 1000;
}

.icon {
  font-size: 2rem;
}

.left {
  position: absolute;
  left: 10px;
  top: 0;
}

.right {
  position: absolute;
  right: 10px;
  top: 0;
}

@media (min-width: 800px) {
  .left {
    left: 30%;
  }

  .right {
    right: 30%;
  }
}
</style>
