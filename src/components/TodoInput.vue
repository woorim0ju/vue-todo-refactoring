<template>
  <div>
    <div class="md-layout" style="margin: 0.5rem; color: #fff !important">
      <div class="md-layout-item md-size-90">
        <md-field>
          <label>Things To Do</label>
          <md-input v-model="doItem" @keyup.enter="addTodo"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-10" @click="addTodo">
        <i class="fas fa-plus-circle addBtn"></i>
      </div>

      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          알림!
          <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        </h3>
        <div slot="body">할일을 입력하세요.</div>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from "./common/Modal";
export default {
  components: {
    Modal,
  },
  data: function () {
    return {
      doItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.doItem) {
        //this.$emit("addOne", this.doItem);
        this.$store.commit("addFn", this.doItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.doItem = "";
    },
  },
};
</script>

<style>
.md-field,
.md-focused,
.md-input,
.md-textarea,
label {
  background: #365fd9 !important;
  border-style: none;
  border-radius: 5px;
  margin: 0 0 5px 0 !important;
  color: #fff !important;
  -webkit-text-fill-color: #ddd !important;
}
.addBtn {
  vertical-align: middle;
  margin-top: 12px;
  font-size: 24px;
  cursor: pointer;
}
.closeModalBtn {
  color: #42b983;
}
</style>