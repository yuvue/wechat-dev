<template>
  <div>
    <ContactItem
      avatar="/img/icons/contact_top-friend-notify.png"
      name="新的朋友"
      @itemClick="itemClick('/contact/friend')"
    ></ContactItem>
    <ContactItem
      avatar="/img/icons/contact_top-addgroup.png"
      name="群聊"
      @itemClick="itemClick('/group')"
    ></ContactItem>
  </div>
</template>

<script>
import ContactItem from "./ContactItem";
export default {
  components: {
    ContactItem
  },
  methods: {
    itemClick(url) {
      this.$router.push(url);
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
