<template>
  <div class="header">
    <el-row>
      <el-col :span="8" class="left">
        <slot name="header-left"></slot>
      </el-col>
      <el-col :span="8">
        <p class="t-m">{{ text }}</p>
      </el-col>
      <el-col :span="8" class="right">
        <slot name="header-right"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["text"]
};
</script>

<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  padding: 0 10px;
  line-height: 45px;
  text-align: center;
  border-bottom: 1px solid @br-header;
  font-size: 1.7rem;
  background-color: @bg;
  z-index: 1000;
}

.icon {
  font-size: 2rem;
}

@media (min-width: 300px) {
  .left {
    .t-l;
  }

  .right {
    .t-r;
  }
}

@media (min-width: 800px) {
  .left {
    .t-r;
  }

  .right {
    .t-l;
  }
}
</style>
