<template>
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 100%; height: 500px;margin-top:50px;"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>
<script type="text/javascript">
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import axios from 'axios';
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBfM2zyvyUXxPmFdrY6VWNdj5i5FQ7gtj4',
      // v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input
    }
  });

  // axios.get('https://machine-api-campus.herokuapp.com/api/machines')
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
export default{
  name:"machine",
  props: ['myData'],
  data(){
   return{
     data: [],
     errors: [],
     center: {lat: 10.0, lng: 10.0},
     markers: [{position: {lat: 10.0, lng: 10.0}
     }, {
       position: {lat: 11.0, lng: 11.0}
     }]

     }
    },
  methods:{

  },
  created(){
    axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
  .then(response => {
    this.data = response.data
    console.log(this.data[0].name);
  })
  .catch(e => {
    this.errors.push(e)
  })
  }
}
</script>
<style media="screen">

</style>
