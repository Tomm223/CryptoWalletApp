import { makeAutoObservable } from 'mobx'
import { FetchWallet } from '../service/fetch';
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
   loader = true
   isloading = false
   constructor() {
      makeAutoObservable(this);
   }
   setWallet({ list, userId, _id }) {
      this.list = list
      this.userId = userId
      this._id = _id
      //
      this.loader = false
      //

   }

   setWalletAnalytics({ total, list, _id, userId }) {
      this.totalWallet = total
      this.list = list
      this._id = _id
      this.userId = userId
      // add data for user
      this.isloading = false
      //
      this.loader = false

   }
   setIsLoading(bool) {
      this.isloading = bool
   }
   setLoader(bool) {
      this.loader = bool
   }
   remove() {
      this.list = []
      this.userId = null
      this._id = null
      this.totalWallet = {
         total: 0,
         percentage: 0,
         profit: 0
      }
      this.loader = true
      this.isloading = false
   }

}

export default new WalletStore()
