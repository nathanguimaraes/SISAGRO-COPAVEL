<template>
    <div id="app">
      <link rel="stylesheet" href="node_modules/ol/ol.css">
      <div class="row-fluid">
        <div class="span12">
  
        </div>
      </div>
      <form class="form">
        <label for="format">Page size </label>
        <select id="format">
          <option value="a0">A0 (slow)</option>
          <option value="a1">A1</option>
          <option value="a2">A2</option>
          <option value="a3">A3</option>
          <option value="a4" selected>A4</option>
          <option value="a5">A5 (fast)</option>
        </select>
        <label for="resolution">Resolution </label>
        <select id="resolution">
          <option value="72">72 dpi (fast)</option>
          <option value="150">150 dpi</option>
          <option value="300">300 dpi (slow)</option>
        </select>
      </form>
      <button id="export-pdf">Export PDF</button>
    </div>
  </template>
  <script>
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import WKT from 'ol/format/WKT.js';
  import { OSM, Vector as VectorSource } from 'ol/source.js';
  import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
  import jsPDF from 'jspdf'; // Importe a biblioteca jsPDF
  
  export default {
    mounted() {
      const raster = new TileLayer({
        source: new OSM(),
      });
  
      const format = new WKT();
      const feature = format.readFeature(
        'POLYGON((10.689697265625 -25.0927734375, 34.595947265625 ' +
          '-20.1708984375, 38.814697265625 -35.6396484375, 13.502197265625 ' +
          '-39.1552734375, 10.689697265625 -25.0927734375))'
      );
      
      const vector = new VectorLayer({
        source: new VectorSource({
          features: [feature],
        }),
        opacity: 0.5,
      });
  
      const map = new Map({
        layers: [raster, vector],
        target: 'map',
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
  
      const dims = {
        a0: [1189, 841],
        a1: [841, 594],
        a2: [594, 420],
        a3: [420, 297],
        a4: [297, 210],
        a5: [210, 148],
      };
  
      const exportButton = document.getElementById('export-pdf');
  
      exportButton.addEventListener(
        'click',
        function () {
          exportButton.disabled = true;
          document.body.style.cursor = 'progress';
  
          const format = document.getElementById('format').value;
          const resolution = document.getElementById('resolution').value;
          const dim = dims[format];
          const width = Math.round((dim[0] * resolution) / 25.4);
          const height = Math.round((dim[1] * resolution) / 25.4);
          const size = map.getSize();
          const viewResolution = map.getView().getResolution();
  
          map.once('rendercomplete', function () {
            const mapCanvas = document.createElement('canvas');
            mapCanvas.width = width;
            mapCanvas.height = height;
            const mapContext = mapCanvas.getContext('2d');
            Array.prototype.forEach.call(
              document.querySelectorAll('.ol-layer canvas'),
              function (canvas) {
                if (canvas.width > 0) {
                  const opacity = canvas.parentNode.style.opacity;
                  mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
                  const transform = canvas.style.transform;
                  const matrix = transform
                    .match(/^matrix\(([^\(]*)\)$/)[1]
                    .split(',')
                    .map(Number);
                  mapContext.setTransform.apply(mapContext, matrix);
                  mapContext.drawImage(canvas, 0, 0);
                }
              }
            );
            mapContext.globalAlpha = 1;
            mapContext.setTransform(1, 0, 0, 1, 0, 0);
            const pdf = new jsPDF('landscape', undefined, format);
            pdf.addImage(
              mapCanvas.toDataURL('image/jpeg'),
              'JPEG',
              0,
              0,
              dim[0],
              dim[1]
            );
            pdf.save('map.pdf');
            map.setSize(size);
            map.getView().setResolution(viewResolution);
            exportButton.disabled = false;
            document.body.style.cursor = 'auto';
          });
  
          const printSize = [width, height];
          map.setSize(printSize);
          const scaling = Math.min(width / size[0], height / size[1]);
          map.getView().setResolution(viewResolution / scaling);
        },
        false
      );
    },
  };
  </script>
  
  <style scoped>
  .map {
    width: 90%;
    height: 90vh;
    margin: auto;
    margin-left: 5%;
    padding-top: 20%;
    display: block;
  }
  </style>