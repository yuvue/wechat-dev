<template>
  <div class="h-100">
    <BaseHeader text="发起群聊">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
      <template slot="right">
        <el-button type="primary" size="small" @click="submit">确定</el-button>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <ContactCardSelectSort ref="card"></ContactCardSelectSort>
    </main>
  </div>
</template>

<script>
import BaseHeader from 'c/app/BaseHeader'
import ContactCardSelectSort from 'c/contact/ContactCardSelectSort'
import { addGroup } from 'service/group'

export default {
  name: 'groupAdd',
  components: {
    BaseHeader,
    ContactCardSelectSort,
  },
  methods: {
    async submit() {
      let idList = this.$refs.card.idList
      let res = await addGroup({ idList })
    },
  },
}
</script>
