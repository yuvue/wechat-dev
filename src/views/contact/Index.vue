<template>
  <div>
    <BaseHeader text="通讯录">
      <template slot="right">
        <i class="icon icon-adduser" @click="$router.push('/contact/add')"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <ContactCardMenu></ContactCardMenu>
      <ContactCardSort></ContactCardSort>
    </main>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import ContactCardSort from "c/contact/ContactCardSort";
import ContactCardMenu from "c/contact/ContactCardMenu";
import BaseHeader from "c/app/BaseHeader";
import BaseFooter from "c/app/BaseFooter";

export default {
  name: "chat",
  components: {
    ContactCardMenu,
    ContactCardSort,
    BaseFooter,
    BaseHeader
  }
};
</script>

<style scoped lang="less"></style>
