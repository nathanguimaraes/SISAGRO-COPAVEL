<template>
    <div>
      <div ref="map" class="map"></div>
      <form>
        <label for="type">Tipo de medição &nbsp;</label>
        <select v-model="measurementType" @change="changeMeasurementType">
          <option value="Polygon">Área (Poligono)</option>   
        
          
        </select>
      </form>
    </div>
  </template>
  
  <script>
  import 'ol/ol.css';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
  import { OSM, Vector as VectorSource } from 'ol/source.js';
  import { Draw, Modify } from 'ol/interaction.js';
  import { Circle as CircleStyle, Fill, Stroke, Style, Text, RegularShape } from 'ol/style.js';
  import { LineString, Polygon } from 'ol/geom.js';
  import { getArea, getLength } from 'ol/sphere.js';
  
  export default {
    data() {
      return {
        measurementType: 'LineString',
        showSegments: true,
        clearPrevious: true,
        map: null,
        source: null,
        draw: null,
        modify: null,
      };
    },
    mounted() {
      this.initializeMap();
    },
    methods: {
      initializeMap() {
        this.source = new VectorSource();
  
        const raster = new TileLayer({
          source: new OSM(),
        });
  
        const vector = new VectorLayer({
          source: this.source,
          style: this.getStyleFunction,
        });
  
        this.map = new Map({
  layers: [raster, vector],
  target: this.$refs.map,
  view: new View({
    center: [0, 0], // Default center
    zoom: 2,        // Default zoom level
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
  
        this.modify = new Modify({ source: this.source, style: this.getModifyStyle });
  
        this.map.addInteraction(this.modify);
  
        this.addInteraction();
      },
      getStyleFunction(feature, segments) {
        const geometry = feature.getGeometry();
        const type = geometry.getType();
        const styles = [
          new Style({
            fill: new Fill({
              color: 'rgba(255, 255, 255, 0.2)',
            }),
            stroke: new Stroke({
              color: 'rgba(0, 0, 0, 0.5)',
              lineDash: [10, 10],
              width: 2,
            }),
            image: new CircleStyle({
              radius: 5,
              stroke: new Stroke({
                color: 'rgba(0, 0, 0, 0.9)',
              }),
              fill: new Fill({
                color: 'rgba(255, 255, 255, 0.2)',
              }),
            }),
          }),
        ];
  
        if (type === 'Polygon' || type === 'MultiPolygon') {
          const area = getArea(geometry);
          let output;
          if (area > 100) {
            output = Math.round((area / 100) * 100) / 100 + ' m²';
          } else {
            output = Math.round(area * 100) / 100 + ' m²';
          }
          const labelStyle = new Style({
            text: new Text({
              font: '14px Calibri,sans-serif',
              fill: new Fill({
                color: 'rgba(255, 255, 255, 1)',
              }),
              backgroundFill: new Fill({
                color: 'rgba(0, 0, 0, 0.7)',
              }),
              padding: [3, 3, 3, 3],
              textBaseline: 'bottom',
              offsetY: -15,
              text: output,
            }),
          });
          styles.push(labelStyle);
        }
  
        return styles;
      },
      getModifyStyle() {
        return new Style({
          image: new CircleStyle({
            radius: 5,
            stroke: new Stroke({
              color: 'rgba(0, 0, 0, 0.7)',
            }),
            fill: new Fill({
              color: 'rgba(0, 0, 0, 0.4)',
            }),
          }),
          text: new Text({
            text: 'Arraste para modificar',
            font: '12px Calibri,sans-serif',
            fill: new Fill({
              color: 'rgba(255, 255, 255, 1)',
            }),
            backgroundFill: new Fill({
              color: 'rgba(0, 0, 0, 0.7)',
            }),
            padding: [2, 2, 2, 2],
            textAlign: 'left',
            offsetX: 15,
          }),
        });
      },
      addInteraction() {
        this.draw = new Draw({
          source: this.source,
          type: this.measurementType,
          style: this.getStyleFunction,
        });
  
        this.draw.on('drawstart', () => {
          if (this.clearPrevious) {
            this.source.clear();
          }
          this.modify.setActive(false);
        });
  
        this.draw.on('drawend', () => {
          this.modify.setStyle(this.getModifyStyle());
          this.modify.setActive(true);
  
          this.map.once('pointermove', () => {
            this.modify.setStyle(null);
          });
        });
  
        this.modify.setActive(true);
        this.map.addInteraction(this.draw);
      },
      changeMeasurementType() {
        this.map.removeInteraction(this.draw);
        this.addInteraction();
      },
      changeShowSegments() {
        this.map.getLayers().getArray()[1].changed();
        this.draw.getOverlay().changed();
      },
      changeClearPrevious() {
        // Lógica para mudança de limpar medição anterior
      },
    },
  };
  </script>
  
  <style>
  .map {
    width: 100%;
    height: 400px;
  }
  </style>
  