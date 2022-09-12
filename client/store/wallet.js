import { makeAutoObservable } from 'mobx'
import { FetchWallet } from '../http/fetch';
import { fixedNum } from '../utils.js/num';
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
         //this.totalWalletCorrecting()
         this.getWalletAnalytics()
      }
      catch (e) {
         console.log('ERRORS', e);
      }
   }
   async getWalletAnalytics() {
      /*const { list, totalWallet } = await FetchWallet.getWalletAnalytics(this.list)
      console.log('пришло');
      this.list = list
      this.totalWallet = totalWallet
      this.isloading = false*/
      const go = (i) => {
         if (i < this.list.length) {
            FetchWallet.getWalletAnalytics(this.list[i]).then((wallet) => {
               console.log(wallet);
               this.list = this.list.map((item) => {
                  if (item._id === wallet._id) {
                     return wallet
                  }
                  return item
               })
               go(i + 1)
            })
         }
         else {
            this.isloading = false
         }
      }
      go(0)
      //const newwallet = await FetchWallet.getWalletAnalytics(this.list[])
      //const { totalWallet, list } = await FetchWallet.getWalletAnalytics(this.list)
      //this.totalWallet = totalWallet
      //this.list = list
      //this.isloading = false
   }
   async totalWalletCorrecting() {
      //this.totalWallet 
      let total = 0
      let percentage = 0
      let profit = 0
      let coun = 0
      this.list = await Promise.all(this.list.map(async (wallet) => {
         const resp = await FetchWallet.getChartWallet(wallet._id)
         const { target, crypto, currency } = await FetchWallet.convertCrypto(wallet.coin.coinId, 'usd')

         coun++
         console.log(coun);

         //
         profit += resp[resp.length - 1][1] - resp[0][1]
         percentage += resp[resp.length - 1][1] / resp[0][1] * 100 - 100
         total += resp[resp.length - 1][1] * target
         //
         wallet.analytics.profit = fixedNum(resp[resp.length - 1][1] - resp[0][1])
         wallet.analytics.percentage = fixedNum(resp[resp.length - 1][1] / resp[0][1] * 100 - 100)
         return wallet
      }));

      this.totalWallet.profit = fixedNum(profit / this.list.length)
      this.totalWallet.percentage = fixedNum(percentage / this.list.length)
      this.totalWallet.total = Math.floor(total)
      //
      this.isloading = false
   }

}

export default new WalletStore()
