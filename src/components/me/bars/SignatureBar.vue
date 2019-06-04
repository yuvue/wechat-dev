<template>
  <MenuPanel>
    <template slot="name">
      <div>个性签名</div>
    </template>
    <template slot="info">
      <el-input v-model="val" @input="handleInput" v-if="isEdit"></el-input>
      <p v-else>{{ signature }}</p>
    </template>
  </MenuPanel>
</template>

<script>
import MenuPanel from 'c/app/MenuPanel'

export default {
  components: {
    MenuPanel,
  },
  props: ['signature', 'isEdit'],
  data() {
    return {
      val: this.signature,
    }
  },
  methods: {
    handleInput() {
      this.$emit('editUser', 'signature', this.val)
    },
  },
}
</script>
