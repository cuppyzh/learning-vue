<template>
  <h1>{{ title }}</h1>
  <Modal :header="header" :text="text" theme="sale" />
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: './cuppyzh.dev',
      header: 'Illegally Smol Lalafell',
      text: 'Careful Naughy Lala in Limsa'
    };
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
