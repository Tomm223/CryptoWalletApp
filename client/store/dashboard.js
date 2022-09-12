import { makeAutoObservable } from 'mobx'
import cookie from 'js-cookie'

class DashboardStore {
   market = {
      list: [],
      _page: 1,
      _limit: 50
   }
   chart = {}
   chartAssetc = {}

   constructor() {
      makeAutoObservable(this);
   }

   setMarket(list) {
      this.market.list = list
      cookie.set('dashboard_market', JSON.stringify(list), { expires: 1 / 24 / 4 })

   }


}

export default new DashboardStore()
