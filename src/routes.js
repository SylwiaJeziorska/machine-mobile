import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import Machine from './Machine.vue'

export default[
  {path:'/list',component:MachinesList},
  {path:'/map',component:MachinesMap},
  {path:'/machines/:id',component:Machine, props: true}
]
