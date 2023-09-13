<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @closeModal="toggleModal">
      <template v-slot:links>
        <a href="http://google.com">Login</a>
        <a href="http://google.com">Signup</a>
      </template>
      <h1>Myumu</h1>
      <p>Ilegally smol lalafell</p>
    </Modal>
  </teleport>

  <br />

  <div v-if="showModal2">
    <Modal @closeModal="toggleModal2">
      <template v-slot:links>
        <h1>Sign up for the newsletter</h1>
      </template>
      <h1>Myumu</h1>
      <p>Ilegally smol lalafell</p>
    </Modal>
  </div>

  <button @click.alt="toggleModal">Open Modal (Alt click)</button>
  <button @click.alt="toggleModal2">Open Modal (Alt click)</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "./cuppyzh.dev",
      showModal: false,
      showModal2: false
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<!-- This style is global -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #f00;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
