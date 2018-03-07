<template >
  <div class="">

    <h1>List des machines</h1>
    <ul>
    <li v-for='machine in machines'>
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
      <p>Last time checked:{{time}}</p>
    </li>
  </ul>

  </div>
</template>
<script type="text/javascript">
var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

export default{
  // props: ['myData'],
  data () {
    return {
      time :event.toLocaleString('en-GB', { timeZone: 'UTC' }),
      machines: [{
            id: 1,
            name: 'What else ?',
            status: true,
            checkedAt: new Date(),
        }, {
            id: 2,
            name: 'Broken',
            status: false,
            checkedAt: new Date(),
        }]
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
</style>
