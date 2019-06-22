<template>
  <BaseHeader text="编辑信息">
    <template slot="left">
      <el-button
        type="default"
        @click="() => this.$emit('changeEditState')"
        v-if="isEdit"
        >取消</el-button
      >
      <i class="el-icon-arrow-left" @click="$router.back()" v-else></i>
    </template>
    <template slot="right">
      <el-button
        type="primary"
        @click="() => this.$emit('onSubmit')"
        v-if="isEdit"
        >完成</el-button
      >
      <i
        class="el-icon-edit"
        @click="() => this.$emit('changeEditState')"
        v-else
      ></i>
    </template>
  </BaseHeader>
</template>

<script>
import BaseHeader from 'c/app/BaseHeader'
export default {
  components: {
    BaseHeader,
  },
  props: ['isEdit', 'changeEditState'],
  methods: {
    //
  },
}
</script>

<style scoped>
.el-button {
  padding: 8px 18px;
}
</style>
