<template>
  <div class="header">
    <el-row>
      <el-col :span="8" class="t-l">
        <i class="icon " :class="header.left">️</i>
      </el-col>
      <el-col :span="8">
        <p class="t-m">{{ header.text }}</p>
      </el-col>
      <el-col :span="8" class="t-r">
        <i class="icon " :class="header.right"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import header from "configs/header";

export default {
  name: "Header",
  data() {
    return header;
  },
  computed: {
    header() {
      let obj = { left: "", right: "", text: "" };
      return this[this.$route.name] ? this[this.$route.name] : obj;
    }
  },
  mounted() {
    console.log(this.header);
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

.icon {
  font-size: 2rem;
}
</style>
