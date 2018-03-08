
<template >

  <div id="single-blog">
    <h1>{{data.name}}</h1>
    <h2
    v-if="data.status"
    :class="{ bold: data.status }">Status: ok</h2>
    <h2
    v-else="data.status"
    >Status: ko</h2>
    <p @click="showform()" >update</p>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios';

  export default{
     props: ['id'],

    data(){

     return{
       a:false,
       data:[],
       machine:{}
     }
    },
    methods:{
      showform:function(){
        this.a = true;
      },
    },

    created(){

    }
  }
</script>
<style scoped>

</style>
