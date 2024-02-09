<template>
  <div id="app">
    <link rel="stylesheet" href="node_modules/ol/ol.css">
    <MapComponent />
    <form class="form">
      <label for="format">Tamanho da Página </label>
      <select id="format">
        <option value="a0">A0 (carregamento lento)</option>
        <option value="a1">A1</option>
        <option value="a2">A2</option>
        <option value="a3">A3</option>
        <option value="a4" selected>A4</option>
        <option value="a5">A5 (carregamento rápido)</option>
      </select>
      <label for="resolution">Resolução </label>
      <select id="resolution">
        <option value="72">72 dpi (carregamento rápido)</option>
        <option value="150">150 dpi</option>
        <option value="300">300 dpi (carregamento lento)</option>
      </select>
    </form>
    <button id="export-pdf" @click="exportToPDF">Exportar para PDF</button>
  </div>
</template>

<script>
import MapComponent from '../components/MapComponent.vue';

export default {
  components: {
    MapComponent,
  },
  methods: {
    exportToPDF() {
      // Lógica para exportar para PDF
      MapComponent.methods.exportToPDF();
    },
  },
};
</script>

<style scoped>
.map {
  width: 90%;
  height: 70vh;
  margin: auto;
  margin-left: 5%;
  padding-top: 5%;
  display: block;
}

/* Estilos para o formulário */
.form {
margin: 20px 0;
margin-left: 5%;
width: 90%;
padding: 10px;
background-color: #f9f9f9;
border: 1px solid #ccc;
border-radius: 5px;
}

/* Estilos para os rótulos */
.form label {
display: block;
margin-bottom: 10px;
font-weight: bold;
color: #333;
}

/* Estilos para as caixas de seleção */
.form select {
width: 100%;
padding: 8px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
}

/* Estilos para o botão de exportação */
#export-pdf {
display: block;
font-weight: 500;
margin-top: 10px;
margin-left: 5%;
margin-bottom: 5%;
padding: 10px 20px;
background-color: #C5E1A5;
color: rgb(0, 0, 0);
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;

}

#export-pdf:disabled {
background-color: #cccccc;
cursor: not-allowed;
}

</style>