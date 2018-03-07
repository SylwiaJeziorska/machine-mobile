import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import Machine from './Machine.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
    libraries: 'places', // This is required if you use the Autocomplete plugin

  }
})
Vue.use(VueRouter)
Vue.component('machines-map', MachinesMap)
Vue.component('machines-list', MachinesList)
Vue.component('machine', Machine)
const router = new VueRouter({
  routes:Routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
