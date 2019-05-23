<template>
  <div class="panel">
    <section>
      <img :src="contact.avatar" alt="" />
      <div class="content">
        <p class="name">{{ contact.remark }}</p>
        <p class="msg">{{ contact.verifyText }}</p>
      </div>
    </section>
    <section v-if="contact.config === 0">
      <el-button type="primary" size="small" @click="add">添加</el-button>
      <el-button size="small" @click="refuse">拒绝</el-button>
    </section>
    <section v-else-if="contact.config === -1" class="msg">
      已拒绝
    </section>
    <section v-else-if="contact.config === 1" class="msg">
      已添加
    </section>
  </div>
</template>

<script>
export default {
  name: "NewFriendPanel",
  props: ["contact"],
  methods: {
    add() {
      let id = this.contact.contact_id;
      this.$store.dispatch("configFriend", { id, config: 1 });
    },
    refuse() {
      let id = this.contact.contact_id;
      this.$store.dispatch("configFriend", { id, config: -1 });
    }
  },
  mounted() {
    //
  }
};
</script>

<style scoped lang="less">
.panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 4px;
  vertical-align: middle;
}

.content {
  display: inline-block;
  vertical-align: middle;
  margin: 10px 14px;
}

.name {
  height: 25px;
  line-height: 25px;
  font-size: 1.6rem;
  color: #000;
}

.msg {
  height: 23px;
  line-height: 23px;
  font-size: 1.3rem;
  color: #888;
}
</style>
