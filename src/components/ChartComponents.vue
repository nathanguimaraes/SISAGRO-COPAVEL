<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'ChartComponents',
  mounted() {
    const ctx1 = this.$refs.chartCanvas1.getContext('2d');
    const ctx2 = this.$refs.chartCanvas2.getContext('2d');
    const ctx3 = this.$refs.chartCanvas3.getContext('2d');

    // Gráfico de Barras
    this.chartInstance1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Pragas',
            data: [12, 19, 3, 5, 2, 3],
          },
        ],
      },
      options: {},
    });

    // Gráfico de Pizza
    this.chartInstance2 = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Milho', 'Soja', 'Cana-de-açucar'],
        datasets: [
          {
            label: '# of Votes',
            data: [10, 15, 7],
            backgroundColor: ['red', 'blue', 'yellow'],
            
          },
        ],
      },
      options: {},
    });

    // Gráfico de Linhas
    this.chartInstance3 = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Vendas',
            data: [12, 19, 3, 5, 2, 3],
          },
        ],
      },
      options: {},
    });
  },
  beforeUnmount() {
    if (this.chartInstance1) {
      this.chartInstance1.destroy();
      this.chartInstance1 = null;
    }

    if (this.chartInstance2) {
      this.chartInstance2.destroy();
      this.chartInstance2 = null;
    }

    if (this.chartInstance3) {
      this.chartInstance3.destroy();
      this.chartInstance3 = null;
    }
  },
};
</script>
<template>
<div class="chart-container">
    <canvas class="chart-canvas" ref="chartCanvas1"></canvas>
    <canvas class="chart-canvas" ref="chartCanvas2"></canvas>
    <canvas class="chart-canvas" ref="chartCanvas3"></canvas>
  </div>
  </template>
  
  <style scoped>

.chartCanvas{
color: var(--font-color);
}
</style>