<template>
  <div id="dialogue-footer">
    <ChatFooterVoice v-if="showSpeak" @send="send"></ChatFooterVoice>
    <ChatFooterText v-if="!showSpeak" @send="send"></ChatFooterText>
  </div>
</template>

<script>
import ChatFooterText from "./ChatFooterText";
import ChatFooterVoice from "./ChatFooterVoice";

export default {
  name: "ChatFooter",
  data() {
    return {
      showSpeak: false
    };
  },
  components: {
    ChatFooterText,
    ChatFooterVoice
  },
  methods: {
    send(data) {
      let to_id = this.$store.state.contact.curContact.contact_id;
      let from_id = this.$store.getters.user._id;
      this.$store.dispatch("sendMessage", { ...data, from_id, to_id });
    }
  }
};
</script>

<style lang="less"></style>
