<template>
  <div class="item" @click="() => this.$emit('itemClick')">
    <section>
      <img :src="avatar" alt="#" class="avatar" />
      <p class="name">{{ name }}</p>
    </section>
    <section>
      <slot name="right"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: ["avatar", "name"]
};
</script>

<style scoped>
.item {
  height: 55px;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
}

.avatar {
  height: 35px;
  width: 35px;
  border-radius: 4px;
  vertical-align: middle;
}

.name {
  height: 35px;
  line-height: 35px;
  vertical-align: middle;
  display: inline-block;
  padding-left: 14px;
  color: #000;
}
</style>
