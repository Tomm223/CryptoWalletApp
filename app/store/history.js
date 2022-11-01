import { makeAutoObservable } from 'mobx'
import { FetchWallet } from '../service/fetch'
class HistoryStore {
   _id = ''
   userId = ''
   list = []
   type = [
      { id: 1, value: null, title: 'all', isActive: true },
      { id: 2, value: 'deposit', title: 'deposit', isActive: false },
      { id: 3, value: 'withdraw', title: 'withdraw', isActive: false },
   ]
   status = [
      { id: 1, value: null, title: 'all', isActive: true },
      { id: 2, value: "done", title: 'done', isActive: false },
      { id: 3, value: 'pending', title: 'pending', isActive: false },
      { id: 4, value: 'error', title: 'error', isActive: false },
   ]
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
         if (this.activeStatusValue && history.statusWord !== this.activeStatusValue) {
            return false
         }
         if (this.activeTypeValue && history.type !== this.activeTypeValue) {
            return false
         }
         if (this.currency && history?.coin?.coinId !== this.currency) {
            return false
         }
         return true
      })
   }
   get activeStatusValue() {
      return this.status.find(i => i.isActive === true).value
   }
   get activeTypeValue() {
      return this.type.find(i => i.isActive === true).value
   }
   setStatus(value) {
      this.status = value
   }
   setType(value) {
      this.type = value
   }
   setCurrency(word) {
      this.currency = word
   }
   remove() {
      this._id = ''
      this.userId = ''
      this.list = []
      this.type = null
      this.status = null
      this.currency = null
   }
}

export default new HistoryStore()
