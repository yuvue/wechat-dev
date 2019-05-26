<template>
  <div>
    <Anchor></Anchor>
    <div class="selected-items" v-show="idList.length">
      <div class="img-container" v-for="id in idList" :key="id">
        <img :src="$store.getters.avatar(id)" />
        <i class="el-icon-circle-close" @click="removeItem(id)"></i>
      </div>
    </div>
    <div v-for="alpha in Object.keys(contacts)" :key="alpha">
      <div class="letter" :id="`a-${alpha}`">{{ alpha }}</div>
      <div v-for="i in contacts[alpha]">
        <ContactItem
          :avatar="i.avatar"
          :name="i.remark"
          @itemClick="itemClick(i.contact_id)"
        >
          <template slot="right">
            <div
              class="circle"
              :class="idList.includes(i.contact_id) && 'circle__selected'"
            ></div>
          </template>
        </ContactItem>
      </div>
    </div>
  </div>
</template>

<script>
import ContactItem from "./ContactItem";
import Anchor from "c/contact/Anchor";

export default {
  components: {
    ContactItem,
    Anchor
  },
  data() {
    return {
      idList: [],
      a: ""
    };
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    }
  },
  methods: {
    itemClick(id) {
      let idList = this.idList;
      idList.includes(id)
        ? idList.splice(idList.indexOf(id), 1)
        : this.idList.push(id);
    },
    removeItem(id) {
      let idList = this.idList;
      return idList.splice(idList.indexOf(id), 1);
    }
  }
};
</script>

<style lang="less">
.letter {
  width: 100%;
  padding: 4px 10px;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid grey;
  margin-right: 30px;
}
.circle__selected {
  background-color: green;
}
.selected-items {
  position: fixed;
  top: 46px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 6px;

  img {
    width: 38px;
    height: 38px;
    border-radius: 2px;
    margin: 4px 6px;
  }

  .img-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;

    i {
      position: absolute;
      font-size: 2rem;
      top: -3px;
      right: -4px;
      color: white;
    }
  }
}
</style>
