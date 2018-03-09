<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <router-link  to="/list">Consulter la liste des machines</router-link>
    <router-link  to="/map">Voir la carte</router-link>
    <router-view :myData='data'></router-view>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      a:false,
      b:false,
      data:[],
      errors: [],
      status:'',
      msg: 'Que voulez vous faire?',
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
  created(){
    this.status = 'loading';
    axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
  .then(response => {
    this.data = response.data

  })
  .catch(e => {
    this.errors.push(e)
  })

  }
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
