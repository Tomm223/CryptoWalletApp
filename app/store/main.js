import { makeAutoObservable } from 'mobx'


class MainStore {
   isOpenLogin = false
   isOpenRegistration = false
   alert = []
   error = []
   checker = {
      str: null,
      func: () => { }
   }
   constructor() {
      makeAutoObservable(this)
   }
   setChecker(str, func) {
      this.checker.str = str
      this.checker.func = func
   }
   closeLogin() {
      this.isOpenLogin = false
   }
   closeRegistration() {
      this.isOpenRegistration = false
   }
   openLogin() {
      if (this.isOpenRegistration) {
         this.isOpenRegistration = false
      }
      this.isOpenLogin = true
   }
   openRegistration() {
      if (this.isOpenLogin) {
         this.isOpenLogin = false
      }
      this.isOpenRegistration = true
   }
   pushAlert(str) {
      const obj = { message: str, id: Date.now() }
      this.alert.push(obj)
   }
   deleteAlert(id) {
      this.alert = this.alert.filter((item) => item.id !== id)
   }
   pushErrors(str) {
      const obj = { message: str, id: Date.now() }
      this.error.push(obj)
   }
   deleteError(id) {
      this.error = this.error.filter((item) => item.id !== id)
   }

}

export default new MainStore()
