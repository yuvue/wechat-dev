<template>
  <div class="dialogue-footer">
    <section>
      <i class="icon icon-yuyin" @click="$parent.showSpeak = true"></i>
    </section>
    <section>
      <el-input v-model="text" />
    </section>
    <section>
      <el-button type="primary" size="small" @click="click">发送</el-button>
    </section>
  </div>
</template>

<script>
var BenzAMRRecorder = require("benz-amr-recorder");

export default {
  name: "ChatFooterText",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    click() {
      let data = {
        type: "text",
        text: this.text
      };
      this.$emit("send", data);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~css/modules/chat-footer";
</style>
