import { makeAutoObservable } from 'mobx'


class MarketPageStore {
   search = ''
   list = []
   limit = 100
   page = 3
   isfetched = false
   constructor() {
      makeAutoObservable(this)
   }
   refresh(list) {
      this.list = list
   }
   setIsFetch(boolean) {
      this.isfetched = boolean
   }
   setSearch(word) {
      this.search = word
   }
   setPage(num) {
      this.page = num
   }
   setLimit(num) {
      this.limit = num
   }
   get sortSearch() {
      if (!this.search.trim()) {
         return this.list
      }
      return this.list.filter(i => i.name.toLowerCase().includes(this.search.toLowerCase()))

   }
   get getlist() {
      return this.list
   }
}

export default new MarketPageStore()
