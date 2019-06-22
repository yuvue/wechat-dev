<template>
  <MenuPanel>
    <template slot="name">
      <div>微信号</div>
    </template>
    <template slot="info">
      <el-input v-model="email" v-if="isEdit"></el-input>
      <p v-else>{{ email }}</p>
    </template>
  </MenuPanel>
</template>

<script>
import MenuPanel from 'c/app/MenuPanel'

export default {
  components: {
    MenuPanel,
  },
  props: ['email', 'isEdit'],
}
</script>
