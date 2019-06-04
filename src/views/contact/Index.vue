<template>
  <div class="h-100">
    <Anchor></Anchor>
    <BaseHeader text="通讯录">
      <template slot="right">
        <i
          class="icon icon-adduser"
          @click="$router.push('/contact/search')"
        ></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom" ref="main">
      <ContactCardMenu></ContactCardMenu>
      <ContactCardSort></ContactCardSort>
    </main>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import ContactCardSort from 'c/contact/ContactCardSort'
import ContactCardMenu from 'c/contact/ContactCardMenu'
import Anchor from 'c/contact/Anchor'
import BaseHeader from 'c/app/BaseHeader'
import BaseFooter from 'c/app/BaseFooter'

export default {
  name: 'Contact',
  components: {
    ContactCardMenu,
    ContactCardSort,
    BaseFooter,
    BaseHeader,
    Anchor,
  },
}
</script>

<style scoped lang="less"></style>
