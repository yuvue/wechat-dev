<template>
  <div class="dialogue-footer">
    <section>
      <i class="icon icon-jianpan2" @click="$parent.showSpeak = false"></i>
    </section>
    <section>
      <Recorder class="xy-ctr"></Recorder>
      <!--<el-input value="点击 录音" @click="startRecord"></el-input>-->
    </section>
    <section>
      <el-button type="primary" size="small" @click="() => this.$emit('send')"
        >发送</el-button
      >
    </section>
  </div>
</template>

<script>
import Recorder from "../Recorder";
export default {
  name: "ChatFooterVoice",
  components: {
    Recorder
  },
  data() {
    return {
      isRecording: false,
      value: "点击 录音"
    };
  },
  method: {
    startRecord() {
      this.value = "点击 结束";
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
@import "~css/modules/chat-footer";

.el-input__inner {
  text-align: center;
}
</style>
