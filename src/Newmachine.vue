<template >
  <div id="add-machine">
    <form @submit.prevent="addMachine()" class="form">
      <input   placeholder="add name" v-model="buffer.name"><br/>
      <input  placeholder="latitude" v-model="buffer.latitude"><br/>
      <input   placeholder="add machine" v-model="buffer.longitude"><br/>
      <select   v-model="buffer.staus" >
        <option   v-bind:value="true">ON</option>
        <option   v-bind:value="false">OFF</option>
      </select>
    </form>
    <button type="submit"  @click="addMachine()" >submit</button>

  </div>
</template>
<script type="text/javascript">
var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
import axios from 'axios';
  export default{

    data(){

     return{

       buffer: {
        name:'test',
        latitude:'10',
        longitude:'10',
        status:true,
       checkedAt:event.toLocaleString('en-GB', { timeZone: 'UTC' }),
      },
     }
    },
    methods:{
      addMachine:function(){
        axios.post('https://machine-api-campus.herokuapp.com/api/machines', {
            name:this.buffer.name,
            status:this.buffer.status,
            latitude:this.buffer.latitude,
            longitude:this.buffer.longitude,
            checkedAt:this.buffer.checkedAt

            })
          .then(function (response) {
            alert('machine created');
          })
          .catch(function (error) {

          });

      }
    },
    created(){
      console.log(this.buffer);

    }

  }
</script>
<style scoped >
 input{
   margin-top: 5px;
 }
</style>
