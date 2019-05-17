<template>
  <div class="footer">
    <el-row class="t-m">
      <el-col :span="6">
        <router-link to="/" exact>
          <i class="icon icon-weixin"></i>
          <p>微信</p>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="/contact">
          <div>
            <i class="icon icon-tongxunlu"></i>
            <p>通讯录</p>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="/moment">
          <div>
            <i class="icon icon-faxianxuanzhong"></i>
            <p>瞬间</p>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="/me">
          <div>
            <i class="icon icon-ren1"></i>
            <p>我</p>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="less">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px 0;
  background-color: @bg-footer;
  color: @f-footer;
  z-index: 1000;
}

.icon {
  font-size: 2.5rem;
}

.router-link-active {
  color: #0bb908 !important;
}
</style>
