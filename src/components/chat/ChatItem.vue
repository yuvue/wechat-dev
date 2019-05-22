<template>
  <div class="item" @click="itemClick">
    <div class="item-part item-part-left">
      <img :src="avatar" alt="#" />
    </div>
    <div class="item-part item-part-right">
      <p class="name">
        {{ name }}
        <b class="time">{{ time | _time }}</b>
      </p>
      <p class="msg">{{ msg | _msg }}</p>
    </div>
  </div>
</template>

<script>
import _time from "@/utils/filterTime";

export default {
  name: "ChatItem",
  props: ["name", "time", "msg", "avatar", "id"],
  methods: {
    itemClick() {
      let id = this.id;
      this.$router.push(`/chat/${id}`);
      this.$store.dispatch("setCurContact", id);
    }
  },
  filters: {
    _msg(msg) {
      if (msg.type === "audio") return `[语音] ${msg.length}s`;
      else return msg.text;
    },
    _time
  },
  mounted() {
    //
  }
};
</script>

<style scoped lang="less">
@import "~css/colors.less";
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
