<template>
  <div class="item">
    <div class="item-part item-part-left">
      <img src="~img/chenhuan.jpeg" alt="#" />
    </div>
    <div class="item-part item-part-right">
      <p class="name">
        陈欢
        <b class="time">2019/2/23</b>
      </p>
      <p class="msg">嗯呢</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatItem",
  data() {
    return {};
  },
  computed: {
    //
  },
  mounted() {
    //
  }
};
</script>

<style scoped lang="less">
.item {
  height: 70px;
  width: 100%;
  padding: 11px 15px;
  position: relative;
  background-color: #fff;
}

.item-part {
  height: 48px;
  float: left;
  position: relative;
}

.item-part-left {
  width: 48px;
}

.item-part-right {
  padding-left: 12px;
  width: calc(100% - 48px);
}

img {
  display: block;
  height: 48px;
  width: 48px;
  border-radius: 4px;
}

.name {
  margin: 0;
  height: 25px;
  line-height: 25px;
  position: relative;
  font-size: 1.6em;
  color: #000;
}

.msg {
  height: 23px;
  line-height: 23px;
  position: relative;
  font-size: 1.3em;
  color: #888;
}

.time {
  position: absolute;
  right: 4px;
  color: @font-light-2;
  font-size: 1.2rem;
  font-weight: 100;
}
</style>
