<template>
  <div class="dialogue-footer">
    <section>
      <i class="icon icon-jianpan2" @click="$parent.showSpeak = false"></i>
    </section>
    <section>
      <Recorder class="xy-ctr" ref="recorder"></Recorder>
    </section>
    <section>
      <el-button type="primary" size="small" @click="submit">发送</el-button>
    </section>
  </div>
</template>

<script>
import Recorder from '../Recorder'
export default {
  name: 'ChatFooterVoice',
  components: {
    Recorder,
  },
  methods: {
    submit() {
      let { audio, seconds } = this.$refs.recorder
      let fd = new FormData()
      fd.append('audio', audio)
      fd.append('sec', seconds)
      this.$emit('send', 'audio', fd)
    },
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
@import '~css/modules/chat-footer';

.el-input__inner {
  text-align: center;
}
</style>
