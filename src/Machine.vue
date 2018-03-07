
<template >
  <div class="">

    <h1>Machine:{{myData[0].name}}</h1>

    <h2
    v-if="myData[0].status"
    :class="{ bold: myData[0].status }">Status: {{msg}}</h2>
    <h2
    v-else="myData[0].status"
    >Status: ko</h2>
    <p>Last time checked:{{time}}</p>
  </div>
</template>
<script type="text/javascript">
var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

  export default{
    props: ['myData'],
    data(){
     return{
       msg:'ok',
       time :event.toLocaleString('en-GB', { timeZone: 'UTC' })
     }
    },
    methods:{

    },
  }
</script>
<style media="screen">
  .bold{
    color: red;
  }
</style>
