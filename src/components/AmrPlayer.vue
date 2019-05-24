<template>
  <div>
    <div class="range">
      <div class="second y-ctr x-ctr">{{ `${audio.sec} s` }}</div>
      <div class="range__move" ref="range"></div>
    </div>
    <el-button size="small" type="primary" @click="play">播放</el-button>
  </div>
</template>

<script>
import AmrPlayer from "benz-amr-recorder";
let player = null;
let host = "http://localhost:3000";
export default {
  name: "AmrPlayer",
  props: ["audio"],
  methods: {
    play() {
      player = new AmrPlayer();
      player.initWithUrl(host + this.audio.src).then(() => {
        player.play();
        this.interval = setInterval(() => {
          this.seconds += 1;
          let range = this.$refs.range;
          range.style.width = this.seconds + "px";
        }, 1000);
        player.onEnded(() => {
          clearInterval(this.interval);
          player = null;
        });
      });
    }
  }
};
</script>

<style scoped lang="less">
.range {
  width: 140px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid black;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.el-button {
  vertical-align: middle;
  margin-left: 20px;
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
</style>
