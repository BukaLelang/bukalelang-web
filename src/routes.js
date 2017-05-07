import Home from './components/Home.vue'
import DownloadApp from './components/DownloadApp.vue'

export const routes = [
  { path : '', component: Home},
  { path : '/apps', component: DownloadApp},
]
