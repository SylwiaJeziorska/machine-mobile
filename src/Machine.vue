
<template >

  <div id="single-blog">
    <h1>{{data.name}}</h1>
    <h2
    v-if="data.status"
    :class="{ bold: data.status }">Status: ok</h2>
    <h2
    v-else="data.status"
    >Status: ko</h2>

    <p>{{data.name}}</p>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios';

  export default{
     props: ['id'],

    data(){

     return{
       data:[],
       machine:{}
     }
    },
    methods:{

    },

    created(){

      axios.get('https://machine-api-campus.herokuapp.com/api/machines/'+this.id)
      .then(response =>  {
        this.data = response.data
        console.log(response.data.id);
      })
    }
  }
</script>
<style media="screen">

</style>
