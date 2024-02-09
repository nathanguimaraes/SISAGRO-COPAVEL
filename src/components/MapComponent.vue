<template>
  <div>
    <div ref="map" class="map"></div>
    
  </div>
</template>

<script>
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import WKT from 'ol/format/WKT';
import jsPDF from 'jspdf';
import Sidebar from './Sidebar.vue';

export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.initializeMap();
  },
  beforeDestroy() {
    this.destroyMap();
  },
  methods: {
    initializeMap() {
      const raster = new TileLayer({
        source: new OSM(),
      });

      const userMarker = new Feature({
        geometry: new Point([0, 0]),
      });

      const vectorSource = new VectorSource({
        features: [userMarker],
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      this.map = new Map({
        layers: [raster, vectorLayer],
        target: this.$refs.map,
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            const userLocation = fromLonLat([longitude, latitude]);
            userMarker.setGeometry(new Point(userLocation));
            this.map.getView().setCenter(userLocation);
            this.map.getView().setZoom(15);
          },
          error => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
      }

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

      // Adicione a camada de vetor ao mapa
      this.map.addLayer(vector);

      const dims = {
        a0: [1189, 841],
        a1: [841, 594],
        a2: [594, 420],
        a3: [420, 297],
        a4: [297, 210],
        a5: [210, 148],
      };

      const exportButton = document.getElementById('export-pdf');

      exportButton.addEventListener('click', () => {
        exportButton.disabled = true;
        document.body.style.cursor = 'progress';

        const format = document.getElementById('format').value;
        const resolution = document.getElementById('resolution').value;
        const dim = dims[format];
        const width = Math.round((dim[0] * resolution) / 25.4);
        const height = Math.round((dim[1] * resolution) / 25.4);
        const size = this.map.getSize();
        const viewResolution = this.map.getView().getResolution();

        this.map.once('rendercomplete', () => {
          const mapCanvas = document.createElement('canvas');
          mapCanvas.width = width;
          mapCanvas.height = height;
          const mapContext = mapCanvas.getContext('2d');
          Array.prototype.forEach.call(
            document.querySelectorAll('.ol-layer canvas'),
            canvas => {
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
          pdf.addImage(mapCanvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, dim[0], dim[1]);
          pdf.save('map.pdf');
          this.map.setSize(size);
          this.map.getView().setResolution(viewResolution);
          exportButton.disabled = false;
          document.body.style.cursor = 'auto';
        });

        const printSize = [width, height];
        this.map.setSize(printSize);
        const scaling = Math.min(width / size[0], height / size[1]);
        this.map.getView().setResolution(viewResolution / scaling);
      });
    },
    destroyMap() {
      if (this.map) {
        this.map.setTarget(null);
        this.map = null;
      }
    },
    exportToPDF() {
      if (this.map) {
        // Aguarde a renderização do mapa antes de exportar para PDF
        this.map.once('rendercomplete', () => {
          const format = new jsPDF();
          const canvas = this.$refs.map.querySelector('canvas');

          if (canvas) {
            format.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, 210, 297);
            format.save('map.pdf');
          } else {
            console.error('Canvas not found. Map may not be rendered yet.');
          }
        });

        // Force a renderização do mapa
        this.map.renderSync();
      }
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
</style>
