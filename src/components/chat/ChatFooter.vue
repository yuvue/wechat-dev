<template>
  <div id="dialogue-footer">
    <section>
      <i
        v-show="!showSpeak"
        class="icon icon-yuyin"
        @click="showSpeak = true"
      ></i>
      <i
        v-show="showSpeak"
        class="icon icon-jianpan2"
        @click="showSpeak = false"
      ></i>
    </section>
    <section>
      <div
        class="chat-way"
        @keyup.enter="enter"
        @mousedown="down"
        @mouseup="up"
      >
        <span v-if="showSpeak">按住 说话</span>
        <input v-if="!showSpeak" type="text" v-model="text" />
      </div>
    </section>
    <section>
      <button @click="enter">发送</button>
    </section>
  </div>
</template>

<script>
var BenzAMRRecorder = require("benz-amr-recorder");

export default {
  name: "FooterDialogue",
  data() {
    return {
      showSpeak: false,
      text: "",
      recording: false,
      amr: new BenzAMRRecorder()
    };
  },
  computed: {
    //
  },
  methods: {
    enter() {
      if (this.showSpeak === false) {
        if (this.text === "") return;
        let wrapper = {
          type: "text",
          text: this.text
        };
        this.$store.dispatch("sendMessage", wrapper);
        this.text = "";
      }
    },
    down() {
      this.recording = true;
    },
    up() {
      this.recording = false;
    }
  },
  watch: {
    recording: function(n, o) {
      let Amr = this.amr;
      if (n === true && o === false) {
        let pr = Amr.initWithRecord();
        pr.then(function() {
          Amr.startRecord();
        });
      }
      if (n === false && o === true) {
        Amr.finishRecord().then(() => {
          let wrapper = {
            type: "audio",
            blob: Amr.getBlob(),
            time: Amr.getDuration()
          };
          console.log(wrapper);
          this.$store.dispatch("sendMessage", wrapper);
          this.amr = new BenzAMRRecorder();
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
#dialogue-footer {
  font-size: 1em;
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 10px;
  z-index: 100;
  display: flex;
  border-top: 1px solid #dedbdb;
  background-color: #f7f7f7;

  i {
    margin: 0 3px;
    font-size: 2.7em;
  }

  section {
    flex-grow: 0;
    line-height: 50px;

    &:nth-child(2) {
      margin: 0 6px;
      flex-grow: 1;
    }
  }
}
button {
  font-size: 1.4rem;
}
input {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.chat-way {
  height: 34px;
  margin: 8px 4px;
  border-radius: 2px;
  text-align: center;
  position: relative;
  font-size: 1.4em;
  line-height: 34px;
}
</style>
