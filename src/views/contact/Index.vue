<template>
  <div>
    <BaseHeader text="通讯录">
      <template slot="right">
        <i class="icon icon-adduser" @click="$router.push('/contact/add')"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <ContactCardSort></ContactCardSort>
    </main>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import ContactCardSort from "c/contact/ContactCardSort";
import BaseHeader from "c/app/BaseHeader";
import BaseFooter from "c/app/BaseFooter";

export default {
  name: "chat",
  components: {
    ContactCardSort,
    BaseFooter,
    BaseHeader
  }
};
</script>

<style scoped lang="less"></style>
