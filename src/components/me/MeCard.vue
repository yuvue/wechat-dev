<template>
  <div id="me-card" @click="() => this.$emit('clickMeCard')">
    <section class="avatar">
      <img :src="avatar" alt="" />
    </section>
    <section class="info">
      <p class="name">{{ nickname }}</p>
      <p class="wechat">微信号：{{ email }}</p>
    </section>
    <slot name="icon"></slot>
  </div>
</template>

<script>
export default {
  name: "MeCard",
  props: ["nickname", "email", "avatar"]
};
</script>

<style lang="less" scoped>
#me-card {
  width: 100%;
  height: 120px;
  padding: 30px 0;
  display: flex;
  background-color: #fff;
  position: relative;
}

.avatar {
  margin: 0 20px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 3px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  line-height: 30px;
  padding-left: 20px;

  .name {
    font-size: 1.8em;
  }

  .wechat {
    font-size: 1.5em;
    color: #4c4c4c;
    display: flex;
    flex-grow: 0;
  }
}

.el-icon-arrow-right {
  position: absolute;
  right: 10px;
  bottom: 37px;
  font-size: 1.6rem;
}
</style>
