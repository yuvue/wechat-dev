<template>
  <div>
    <div v-for="alpha in Object.keys(contacts)">
      <div class="letter">{{ alpha }}</div>
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
import { mapState } from "vuex";
import ContactItem from "./ContactItem";
export default {
  components: {
    ContactItem
  },
  data() {
    return {
      idList: [],
      a: ""
    };
  },
  computed: {
    contacts() {
      return this.$store.getters["contacts"];
    }
  },
  methods: {
    itemClick(id) {
      let idList = this.idList;
      idList.includes(id)
        ? idList.splice(idList.indexOf(id), 1)
        : this.idList.push(id);
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
}
.circle__selected {
  background-color: green;
}
</style>
