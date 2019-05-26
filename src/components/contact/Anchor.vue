<template>
  <div class="anchor">
    <p
      v-for="letter in list"
      :key="letter"
      class="anchor-letter"
      v-anchor="letter"
    >
      {{ letter }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Anchor',
  computed: {
    list() {
      return Object.keys(this.$store.getters['contacts'])
    },
  },
}
</script>

<style>
.anchor {
  position: fixed;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
}
.anchor-letter {
  padding: 2.6px;
}
</style>
