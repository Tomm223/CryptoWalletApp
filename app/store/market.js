import { makeAutoObservable } from 'mobx'


class MarketPageStore {
   search = ''
   list = []
   limit = 100
   total_page = 1
   page = 1
   isfetched = false
   constructor() {
      makeAutoObservable(this)
   }
   refresh(list, total_page) {
      this.list = list
      this.total_page = total_page
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
