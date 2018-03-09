
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
      <input id="file"   ref="my_input" v-model="mydata.name" ><br/>
      <input ref="lat" v-model="mydata.latitude" ><br/>
      <input  ref="lon" v-model="mydata.longitude"  ><br/>
        <input  ref="checkedAt" v-model="mydata.checkedAt"  ><br/>
      <select  v-model="mydata.status" name="status"  >
        <option  value="true">ON</option>
        <option  value="false">OFF</option>
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

    data ( ){
     return {
       a:false,
       mydata:{
         name: '',
         status: '',
         lat: '',
         lon: '',
         checkedAt: ''
       }
     }
    },
    methods:{
      showform:function(){
        this.a = true;

      },
      update:function(){
        console.log(this.mydata);
        axios.put('https://machine-api-campus.herokuapp.com/api/machines/'+this.id, {
            name:this.mydata.name,
            status:this.mydata.Status,
            latitude:this.mydata.lat,
            longitude:this.mydata.lon,
            checkedAt:this.mydata.checkedAt

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
