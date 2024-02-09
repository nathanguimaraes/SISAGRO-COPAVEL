<template>
    <form @submit.prevent="handleSubmit">
      <label for="name">Nome:</label>
      <input type="text" v-model="name" required><br>
  
      <label for="email">Email:</label>
      <input type="email" v-model="email" required><br>
  
      <label for="image">Imagem:</label>
      <input type="file" @change="handleImageUpload" accept="image/*" required><br>
  
      <button type="submit">Gerar PDF</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        image: null,
      };
    },
    methods: {
      handleImageUpload(event) {
        this.image = event.target.files[0];
      },
      handleSubmit() {
        this.$emit("form-submitted", {
          name: this.name,
          email: this.email,
          image: this.image,
        });
      },
    },
  };
  </script>