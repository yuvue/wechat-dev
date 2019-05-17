<template>
  <div>
    <Header text="个人信息">
      <template slot="header-left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
      <template slot="header-right">
        <i class="el-icon-edit" @click="() => this.$emit('edit')"></i>
      </template>
    </Header>

    <main class="main-top">
      <div class="c-1">
        <Panel>
          <template slot="panel-name">
            <div>头像</div>
          </template>
          <template slot="panel-info">
            <img :src="user.avatar" alt="" />
          </template>
        </Panel>

        <Panel>
          <template slot="panel-name">
            <div>昵称</div>
          </template>
          <template slot="panel-info">
            <p>{{ user.nickname }}</p>
          </template>
        </Panel>

        <Panel>
          <template slot="panel-name">
            <div>微信号</div>
          </template>
          <template slot="panel-info">
            <p>{{ user.email }}</p>
          </template>
        </Panel>

        <Panel>
          <template slot="panel-name">
            <div>地区</div>
          </template>
          <template slot="panel-info">
            <p>{{ user.address }}</p>
          </template>
        </Panel>

        <Panel>
          <template slot="panel-name">
            <div>个性签名</div>
          </template>
          <template slot="panel-info">
            <p>{{ user.signature }}</p>
          </template>
        </Panel>
      </div>
    </main>
  </div>
</template>

<script>
import Panel from "component/Panel";
import Header from "component/Header";
export default {
  name: "Info",
  props: ["user", "edit"],
  components: {
    Panel,
    Header
  }
};
</script>

<style lang="less" scoped>
img {
  .img-60;
}
@media (min-width: 800px) {
  .c-1 {
    width: 600px;
    top: 20vh;
    .x-ctr;
  }
}
</style>
