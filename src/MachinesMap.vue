<template>
  <gmap-map
    :center="center"
    :zoom="1"
    style="width: 500px; height: 500px;margin-top:50px;"
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
     errors: [],
     machines: [{
      id: 1,
      latitude: 10,
      longitude: 10,
    },
    {
      id: 2,
      latitude: 11,
      longitude: 9.6,
    }],
     center: {lat: 10.0, lng: 10.0},
     markers: [{position: {lat: 10.0, lng: 10.0}
     }, {
       position: {lat: 11.0, lng: 11.0}
     }]

     }
    },
  methods:{

  },

}
</script>
<style media="screen">

</style>
