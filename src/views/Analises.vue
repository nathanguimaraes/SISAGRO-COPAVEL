
<template>
    <div class="analises">
      <h1>Análises Gráficas</h1>
      <ChartComponents />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import ChartComponents from '../components/ChartComponents.vue';
  
  export default defineComponent({
    name: 'Analises',
    components: {
      ChartComponents,
    },
  });
  </script>
  
  <style scoped>
  .analises {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    color: var(--font-color);
  }

  .chart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 85%;
  
}

.chart-canvas {
  width: 100%;
  max-width: 500px;
  color: var(--font-color);
  
}

@media (min-width: 768px) {
  .chart-canvas {
    max-width: 300px;
  }
}
  </style>
  
  