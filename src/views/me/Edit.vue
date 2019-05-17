<template>
  <div>
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
          <div>名字</div>
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
    </div>
  </div>
</template>

<script>
import Panel from "component/Panel";
import Header from "component/layout/Header";
export default {
  mixin: "Header",
  name: "Edit",
  components: {
    Panel,
    Header
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>

<style lang="less" scoped>
img {
  width: 60px;
  height: 60px;
  border-radius: 6px;
}

@media (min-width: 800px) {
  .c-1 {
    width: 600px;
    top: 20vh;
    .x-ctr;
  }
}
</style>
