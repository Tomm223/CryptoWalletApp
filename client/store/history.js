import { makeAutoObservable } from 'mobx'
import { FetchWallet } from '../http/fetch'
class HistoryStore {
   _id = ''
   userId = ''
   list = []
   type = null
   status = null
   currency = null
   constructor() {
      makeAutoObservable(this)
   }
   set(list) {
      this.list = list
   }
   async fetch() {
      const resp = await FetchWallet.getHistory()
      this._id = resp._id
      this.userId = resp.userId
      this.list = resp.list
   }
   get sort() {
      return this.list.filter((history) => {
         if (this.status && history.statusWord !== this.status) {
            return false
         }
         if (this.type && history.type !== this.type) {
            return false
         }
         if (this.currency && history?.coin?.coinId !== this.currency) {
            return false
         }
         return true
      })
   }
   setStatus(word) {
      this.status = word
   }
   setType(word) {
      this.type = word
   }
   setCurrency(word) {
      this.currency = word
   }
}

export default new HistoryStore()
