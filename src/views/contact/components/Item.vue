<template>
  <div class="item">
    <img src="~img/chenhuan.jpeg" alt="#" class="avatar" />
    <p class="name">陈欢</p>
  </div>
</template>

<script>
export default {
  name: "ContactItem"
};
</script>

<style scoped>
.item {
  height: 55px;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
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
