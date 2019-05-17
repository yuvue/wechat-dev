<template>
  <div class="header">
    <el-row>
      <el-col :span="8" class="left">
        <i class="icon " :class="header.left" @click="leftClick">️</i>
      </el-col>
      <el-col :span="8">
        <p class="t-m">{{ header.text }}</p>
      </el-col>
      <el-col :span="8" class="right">
        <i class="icon " :class="header.right"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import header from "config/header";

export default {
  name: "Header",
  props: {
    header: Object
  },
  methods: {
    leftClick() {
      let icon = this.header.left;
      icon === "icon-back" && this.$router.back();
    }
  }
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

@media (min-width: 200px) {
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
}

@media (min-width: 800px) {
  .left {
    text-align: right;
  }

  .right {
    text-align: left;
  }
}

.icon {
  font-size: 2rem;
}
</style>
