<template>
  <gmap-map
    :center="{lat:Number(userPosition.coords.latitude),lng:Number(userPosition.coords.longitude)}"
    :zoom="10"
    style="width: 80%; height: 500px; margin:auto"
  >
    <gmap-marker
      v-for="machin in myData"
      :position="{lat:parseInt(machin.latitude, 10),
        lng:parseInt(machin.longitude, 10)}"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>
<script type="text/javascript">

import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBfM2zyvyUXxPmFdrY6VWNdj5i5FQ7gtj4',
      v: 'OPTIONAL VERSION NUMBER',
    }
  });

export default{
  name:"machine",
  props: ['myData'],
  data(){
   return{
     userPosition:{
       coords:{
         latitude: '0',
         longitude:'0'
       }
     },
     errors: [],

     center: {lat: 10.0, lng: 10.0},
     markers: [{position: {lat: 10.0, lng: 10.0}
     }, {
       position: {lat: 11.0, lng: 11.0}
     }]

     }
    },
  methods:{
    myPosition(){
      navigator.geolocation.getCurrentPosition(position => {
        this.userPosition = position;
        console.log(position);
      });
    }
  },
  created(){
      this.myPosition();
  }


}
</script>
<style scoped>
.vue-map-container{
  margin-top: 100px!important;
}
</style>
