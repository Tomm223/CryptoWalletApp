import { makeAutoObservable } from 'mobx'
class UserStore {
   id = ''
   username = ''
   lastname = ''
   email = ''
   password = ''
   avatar_link = ''
   currency = {
      value: 'usd',
      label: 'USD'
   }
   isAuth = true
   isloading = false
   constructor() {
      makeAutoObservable(this);
   }
   setIsLoading(bool) {
      this.isloading = bool
   }
   setUser(user) {
      // set store
      this.id = user.id
      this.username = user.username
      this.lastname = user.lastname
      this.email = user.email
      this.password = user.password
      this.avatar_link = user.imgSrc
      this.currency.value = user.currency.value
      this.currency.label = user.currency.label
      // bool
      this.isAuth = true
      this.isloading = false
   }
   outUser() {
      this.id = ''
      this.username = ''
      this.lastname = ''
      this.email = ''
      this.avatar_link = ''
      this.currency.value = 'usd'
      this.currency.label = 'USD'
      //bool
      this.isAuth = false
   }
   isAnonim() {
      this.isAuth = false
   }

}

export default new UserStore()
