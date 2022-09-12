import { makeAutoObservable } from 'mobx'
class UserStore {
   username = ''
   lastname = ''
   email = ''
   avatar_link = ''
   currency = {
      value: '',
      label: ''
   }
   userAnonim = false
   constructor() {
      makeAutoObservable(this);
   }

   setUser(user) {
      // set store
      this.username = user.username
      this.lastname = user.lastname
      this.email = user.email
      this.avatar_link = user.imgSrc
      this.currency.value = user.currency.value
      this.currency.label = user.currency.label
      // bool
      this.isAuth = true
   }
   outUser() {
      this.username = ''
      this.lastname = ''
      this.email = ''
      this.avatar_link = ''
      this.currency.value = ''
      this.currency.label = ''
      //bool
      this.isAuth = false
   }

}

export default new UserStore()
