<template>
  <div class="footer t-c">
    <el-col :span="6">
      <router-link to="/" exact>
        <i class="icon icon-weixin">
          <div class="circle" v-show="count">
            {{ count }}
          </div>
        </i>
        <p class="f-text">微信</p>
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link to="/contact">
        <div>
          <i class="icon icon-tongxunlu"></i>
          <p class="f-text">通讯录</p>
        </div>
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link to="/moment">
        <div>
          <i class="icon icon-faxianxuanzhong"></i>
          <p class="f-text">瞬间</p>
        </div>
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link to="/me">
        <div>
          <i class="icon icon-ren1"></i>
          <p class="f-text">我</p>
        </div>
      </router-link>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'BaseFooter',
  computed: {
    count() {
      return this.$store.getters.allUnReadCount(this.$store.getters.user._id)
    },
  },
}
</script>

<style scoped lang="less">
@import '~css/colors.less';
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding-top: 11px;
  background-color: @bg-footer;
  color: @f-footer;
  z-index: 1000;
}

.icon {
  font-size: 2.5rem;
}

.icon-weixin {
  position: relative;

  .circle {
    position: absolute;
    height: 18px;
    padding: 0 5.4px;
    line-height: 18px;
    text-align: center;
    color: white;
    font-size: 1rem;
    background-color: red;
    border-radius: 50%;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
  }
}

.f-text {
  height: 20px;
}

.router-link-active {
  color: #0bb908 !important;
}
</style>
