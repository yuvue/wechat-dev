<template>
  <div>
    <div v-for="alpha in Object.keys(contacts)">
      <div class="letter">{{ alpha }}</div>
      <div v-for="i in contacts[alpha]">
        <ChatItem
          v-for="i in chats"
          :key="i._id"
          :avatar="i.avatar"
          :msg="i.msg"
          :name="i.remark"
          :time="i.time"
          :id="i._id"
        ></ChatItem>
      </div>
    </div>
  </div>
</template>

<script>
import ChatItem from "./ChatItem";
export default {
  components: {
    ChatItem
  },
  computed: {
    contacts() {
      return this.$store.getters["contacts"];
    }
  },
  methods: {
    itemClick(contact) {
      this.$router.push(`/contact/${contact.remark}`);
      this.$store.dispatch("setCurContact", contact);
    }
  }
};
</script>

<style lang="less">
.letter {
  width: 100%;
  padding: 4px 10px;
}
</style>
