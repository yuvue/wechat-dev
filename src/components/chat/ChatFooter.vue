<template>
  <div id="dialogue-footer">
    <ChatFooterVoice v-if="showSpeak" @send="send"></ChatFooterVoice>
    <ChatFooterText v-if="!showSpeak" @send="send"></ChatFooterText>
  </div>
</template>

<script>
import ChatFooterText from './ChatFooterText'
import ChatFooterVoice from './ChatFooterVoice'
import { _sendAudioMessage, _sendTextMessage } from '@/services/message'

export default {
  name: 'ChatFooter',
  data() {
    return {
      showSpeak: false,
    }
  },
  components: {
    ChatFooterText,
    ChatFooterVoice,
  },
  methods: {
    async send(type, data) {
      let to_id = this.$store.state.contact.curContact.contact_id
      let from_id = this.$store.getters.user._id
      if (type === 'audio') {
        data.append('from_id', from_id)
        data.append('to_id', to_id)
        // this.$store.dispatch("sendMessage", data);
        return await _sendAudioMessage(data)
      }
      if (type === 'text') {
        return await _sendTextMessage({ ...data, from_id, to_id })
      }
    },
  },
}
</script>

<style lang="less"></style>
