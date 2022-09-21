import { makeAutoObservable } from 'mobx'
import { FetchWallet } from '../http/fetch';
import cookie from 'js-cookie'

class WalletStore {
   list = []
   userId = null
   _id = null
   totalWallet = {
      total: 0,
      percentage: 0,
      profit: 0
   }
   isloading = false
   constructor() {
      makeAutoObservable(this);
   }
   setWallet({ list, userId, _id }) {
      this.list = list
      this.userId = userId
      this._id = _id
      //
      this.isloading = true
   }

   setWalletAnalytics({ totalWallet, list }) {
      this.totalWallet = totalWallet
      this.list = list
      // add data for user
      this.isloading = false
   }

   WalletsZero() {
      this.isloading = false
   }

}

export default new WalletStore()
