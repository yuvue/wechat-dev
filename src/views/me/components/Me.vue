<template>
  <div id="me">
    <section class="avatar">
      <img :src="user.avatar" alt="" />
    </section>
    <section class="info">
      <p class="name">{{ user.nickname }}</p>
      <p class="wechat">微信号：{{ user.email }}</p>
    </section>
    <i class="el-icon-arrow-right"></i>
  </div>
</template>

<script>
export default {
  name: "Me",
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  mounted() {
    console.log(this.user);
  }
};
</script>

<style lang="less" scoped>
#me {
  width: 100%;
  height: 120px;
  padding: 30px 0;
  display: flex;
  background-color: #fff;
  position: relative;
}

.avatar {
  margin-left: 20px;

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
