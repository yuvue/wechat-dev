<template>
  <div class="h-100">
    <BaseHeader :text="contact.remark">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.push('/')"></i>
      </template>
      <template slot="right">
        <i
          class="el-icon-more"
          @click="$router.push(`/chat/${contact._id}/config`)"
        ></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <div v-for="msg in contact.msg" :key="msg._id">
        <TextMsgBox :msg="msg" v-if="msg.type === 'text'"></TextMsgBox>
        <AudioMsgBox :msg="msg" v-if="msg.type === 'audio'"></AudioMsgBox>
      </div>
    </main>
    <ChatFooter></ChatFooter>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseHeader from 'c/app/BaseHeader'
import ChatFooter from 'c/chat/ChatFooter'
import TextMsgBox from 'c/chat/TextMsgBox'
import AudioMsgBox from 'c/chat/AudioMsgBox'

export default {
  name: 'ChatDetail',
  data() {
    return {
      user: this.$store.getters['user'],
    }
  },
  components: {
    BaseHeader,
    ChatFooter,
    TextMsgBox,
    AudioMsgBox,
  },
  computed: {
    contact() {
      let {
        contact_id,
        remark,
        messageList,
        type,
      } = this.$store.state.contact.curContact
      let msg = messageList.map(item => {
        let send = item.from_id === this.user._id
        let avatar = send
          ? this.user.avatar
          : this.$store.getters.avatar(item.from_id)
        return { send, avatar, ...item }
      })
      return {
        _id: contact_id,
        type,
        msg,
        remark,
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.contact.type === 'group') {
      this.$store.commit('READ_GROUP_MESSAGE', this.contact._id)
    } else {
      this.$store.dispatch('readMessage', this.contact._id)
    }
    next()
  },
}
</script>

<style scoped></style>
