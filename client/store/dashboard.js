import { makeAutoObservable } from 'mobx'
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
   }


}

export default new DashboardStore()
