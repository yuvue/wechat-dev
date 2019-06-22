<template>
  <div>
    <div v-for="alpha in Object.keys(contacts)" :key="alpha">
      <div class="letter" :id="`a-${alpha}`">{{ alpha }}</div>
      <div v-for="i in contacts[alpha]" :key="i.contact_id">
        <ContactItem
          :avatar="i.avatar"
          :name="i.remark"
          @itemClick="itemClick(i)"
        ></ContactItem>
      </div>
    </div>
  </div>
</template>

<script>
import ContactItem from './ContactItem'
export default {
  components: {
    ContactItem,
  },
  computed: {
    contacts() {
      return this.$store.getters['contacts']
    },
  },
  methods: {
    itemClick(contact) {
      this.$router.push(`/contact/${contact.remark}`)
      this.$store.dispatch('setCurContact', contact)
    },
  },
}
</script>

<style lang="less">
.letter {
  width: 100%;
  padding: 4px 10px;
}
</style>
