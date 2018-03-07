<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <router-link  to="/list">Consulter la liste des machines</router-link>
    <router-link  to="/map">Voir la carte</router-link>
    <router-view :myData='machines'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      a:false,
      b:false,
      msg: 'Que voulez vous faire?',
      // machine:{
      //   name: 'What else ?',
      //   status: true,
      //   checkedAt: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
      // },
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
  methods:{
    onMachinesListClick:function(){
      console.log(this.machine);
      this.a =true;
      this.b=false;
      alert('utilisateur a cliqué dessus machines list');
    },
    onMapClick:function(){
      this.b=true;
        this.a =false;
      alert('utilisateur a cliqué dessus map');
    }
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

a{
  background-color: #4fc08d;
  padding: 15px 25px ;
  border: none;
  color: white!important;
  font-size: 120%;
  text-decoration: none;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
