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
   setWallet({ list, userId, _id, totalWallet }) {
      this.list = list
      this.totalWallet = totalWallet
      if (userId) this.userId = userId
      if (_id) this._id = _id
   }

   async fetchWallets() {
      try {
         this.isloading = true
         const resp = await FetchWallet.getWallet()
         this.list = resp.list.map(wallet => {
            wallet.analytics = {
               profit: null,
               percentage: null
            }
            return wallet
         })
         this.userId = resp.userId
         this._id = resp._id
         // подсчёт
         if (this.list.length) {
            this.getWalletAnalytics()
         }
      }
      catch (e) {
         console.log('ERRORS', e);
      }
   }
   async getWalletAnalytics() {
      try {
         const { list, totalWallet } = await FetchWallet.getWalletAnalytics(this.list)
         console.log('пришло');
         this.list = list
         this.totalWallet = totalWallet
         this.isloading = false
         //save
         this.saveWalletCookie()

      }
      catch (e) {

      }
   }
   saveWalletCookie() {
      cookie.set('wallet_store', JSON.stringify({
         list: this.list,
         userId: this.userId,
         _id: this._id,
         totalWallet: this.totalWallet
      }), { expires: 1 / 24 / 6 })
   }

}

export default new WalletStore()
