<template>
  <div class="dialogue-footer">
    <section>
      <i class="icon icon-jianpan2" @click="$parent.showSpeak = false"></i>
    </section>
    <section>
      <el-input value="点击 录音"></el-input>
    </section>
    <section>
      <el-button type="primary" size="small" @click="() => this.$emit('send')"
        >发送</el-button
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "ChatFooterVoice",
  data() {
    return {
      isRecording: false
    };
  },
  method: {
    click() {}
  },
  mounted() {
    console.log();
  }
};
</script>

<style lang="less" scoped>
@import "~css/modules/chat-footer";

.el-input__inner {
  text-align: center;
}
</style>
