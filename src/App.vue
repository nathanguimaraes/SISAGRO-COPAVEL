
<template>
	<div class="app">
		<!-- Sidebar -->
    
		<Sidebar/>
    

    
		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import MapComponent from './components/MapComponent.vue';

  import jsPDF from 'jspdf';
  import html2canvas from 'html2canvas';
  
import ChartComponents from '../src/components/ChartComponents.vue'
import { defineComponent } from 'vue';


import Produtor from './views/Produtor.vue';
import Imagens from './views/Imagens.vue';


</script>

<style lang="scss">

/* Google Font Import - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root{
    /* ===== Colors ===== */
    --body-color: #F0E8E8;
    --sidebar-color: #fffafa;
    --primary-color: #19b42d;
    --primary-color-light: #F6F5FF;
    --toggle-color: #DDD;
    --text-color: #2d2d2d;

    /* ====== Transition ====== */
    --tran-03: all 0.2s ease;
    --tran-03: all 0.3s ease;
    --tran-04: all 0.3s ease;
    --tran-05: all 0.3s ease;
}
</style>