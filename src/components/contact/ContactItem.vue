<template>
  <div class="item" @click="() => this.$emit('itemClick')">
    <img :src="avatar" alt="#" class="avatar" />
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: ["avatar", "name"]
};
</script>

<style scoped>
.item {
  height: 55px;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  margin-bottom: 1px;
}

.avatar {
  height: 35px;
  width: 35px;
  border-radius: 4px;
  vertical-align: middle;
  float: left;
}

.name {
  width: calc(100% - 40px);
  height: 35px;
  line-height: 35px;
  vertical-align: middle;
  padding-left: 46px;
  position: relative;
  color: #000;
  font-size: 1.6em;
}
</style>
