
<template >

  <div id="single-blog">
    <h1>{{mydata.name}}</h1>
    <h2
    v-if="mydata.status"
    :class="{ bold: mydata.status }">Status: ok</h2>
    <h2
    v-else="mydata.status"
    >Status: ko</h2>
    <p @click="showform()" >update</p>
    <form v-show='a'  class="form">
      <input id="file"   ref="my_input" v-bind:value="mydata.name" ><br/>
      <input ref="lat" v-bind:value="mydata.latitude" ><br/>
      <input  ref="lon"v-bind:value="mydata.longitude"  ><br/>
        <input  ref="checkedAt"v-bind:value="mydata.checkedAt"  ><br/>
      <select   ref="status" name="status"  >
        <option   v-bind:value="true">ON</option>
        <option   v-bind:value="false">OFF</option>
      </select>
    </form>
    <button type="submit"  @click="update()" >submit</button>

  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import axios from 'axios';
var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

  export default{
     props: ['id'],

    data(){

     return{
       a:false,
       mydata:[

       ],

     }
    },
    methods:{
      showform:function(){
        this.a = true;

      },
      update:function(){
        console.log(this.$refs.status.value);
        axios.put('https://machine-api-campus.herokuapp.com/api/machines/'+this.id, {
            name:this.$refs.my_input.value,
            status:this.$refs.status.value,
            latitude:this.$refs.lat.value,
            latitude:this.$refs.lon.value,
            checkedAt:this.$refs.checkedAt.value

            })
          .then(function (response) {
            alert('machine updated');
          })
          .catch(function (error) {

          });
      }
    },

    created(){
      axios.get('https://machine-api-campus.herokuapp.com/api/machines/'+this.id)
      .then(response =>  {
        this.mydata = response.data
      })
    }
  }
</script>
<style scoped>

</style>
