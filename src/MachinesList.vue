<template >
  <div class="">

    <h1>List des machines</h1>
    <ul>
    <li v-for='machine in myData'>
      <h1>

        {{machine.name}}
      </h1>
      <h2
        v-if="machine.status"
        :class="{ bold: machine.status }">Status: ok
      </h2>
      <h2
        v-else="machine.status"
        >Status: ko
      </h2>
      <p>{{machine.id}}</p>
      <p>Last time checked:{{time}}</p>
      <router-link  :to="{ path: '/machines/'+ machine.id}" >click</router-link>

    </li>
  </ul>

  </div>
</template>
<script type="text/javascript">
var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

export default{
  props: ['myData'],
  data () {
    return {
      time :event.toLocaleString('en-GB', { timeZone: 'UTC' }),

    }
  },
}
</script>
<style scoped>
li{
  list-style: none;
  border: 1px solid black;
  margin: auto;
  margin-bottom: 20px;
  width: 70%;
  padding: 10px;

}
.bold{
  color:red;
}
</style>
