import Home from './components/Home.vue'
import DownloadApp from './components/DownloadApp.vue'
import AuctionDetail from './components/AuctionDetail.vue'

export const routes = [
  { path : '', component: Home},
  { path : '/apps', component: DownloadApp},
  { path : '/lelang/:slug', component: AuctionDetail},
]
