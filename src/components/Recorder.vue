<template>
  <div class="recorder">
    <el-button size="small" @click="startRecord" v-if="!isRecording"
      >点击录音</el-button
    >
    <el-button size="small" @click="stopRecord" v-else>结束录音</el-button>
    <div class="range">
      <div class="second y-ctr x-ctr">{{ `${seconds} s` }}</div>
      <div class="range__move" ref="range"></div>
    </div>
  </div>
</template>

<script>
import BenzAMRRecorder from 'benz-amr-recorder'
let amrRec = null

export default {
  name: 'Recorder',
  data() {
    return {
      isRecording: false,
      seconds: 0,
      audio: null,
    }
  },
  methods: {
    startRecord() {
      amrRec = new BenzAMRRecorder()
      amrRec.initWithRecord().then(() => {
        amrRec.startRecord()
        this.isRecording = true
        amrRec.onFinishRecord(() => {
          this.audio = amrRec.getBlob()
          console.log(amrRec.getBlob())
          amrRec = null
        })
        this.interval = setInterval(() => {
          this.seconds += 1
          let range = this.$refs.range
          range.style.width = this.seconds + 'px'
          if (this.seconds > 120) {
            this.stopRecord()
            clearInterval(this.interval)
          }
        }, 1000)
      })
    },
    stopRecord() {
      this.isRecording = false
      amrRec.finishRecord()
      this.audio = amrRec.getBlob()
      clearInterval(this.interval)
    },
  },
}
</script>

<style scoped lang="less">
.recorder {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.4rem;
}
.range {
  margin: 0 16px;
  width: 140px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid black;
  position: relative;
}

.range__move {
  .range;
  width: 0;
  margin: 0;
  border: 0;
  overflow: hidden;
  transition: 1s width;
  max-width: 140px;
  background: #398181;
  text-align: center;
}
.second {
  z-index: 1000;
}
</style>
