<template>
  <div>
    <BaseHeader text="添加朋友">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <div class="add-div" @click="$router.push('/contact/search')">
        <i class="el-icon-search"></i>
        <span>邮箱/昵称</span>
      </div>
    </main>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";

export default {
  components: {
    BaseHeader
  }
};
</script>

<style lang="less">
.add-div {
  width: 100%;
  background-color: white;
  font-size: 1.6rem;
  padding: 14px 20px;
  cursor: text;

  i {
    color: #5dc261;
  }

  span {
    margin-left: 10px;
    color: lighten(black, 60%);
  }
}
</style>
