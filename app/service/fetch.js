import $api, { API_URL } from "../http"

class AuthFetch {
   async getUser(userId) {
      const resp = await $api.get(`${API_URL}/api/user/${userId}`)
      return resp.data
   }
   async registration({ email, password, username, lastname }) {
      const respa = await $api.post(API_URL + '/auth/registration', {
         email, password, username, lastname
      })
      return respa.data
   }
   async login({ email, password }) {
      const respa = await $api.post(API_URL + '/auth/login', {
         email,
         password
      })
      return respa.data
   }
   async logout() {
      const resp = await $api.get(API_URL + '/auth/logout')
      return resp.data
   }
   generateURLForAvatar(imgFileName) {
      return API_URL + `/auth/img/${imgFileName}`
   }
   async сhangeImgAvatar(file) {
      // недоработанно
   }
   async userChange({ username, lastname, email, avatar_link, currency, password }) {
      const body = { username, lastname, email, avatar_link, currency }
      if (password) body.password = password
      const respa = await $api.post(API_URL + '/auth/change', body)
      return respa.data
   }
}
class WalletFetch {
   async getWallet() {
      const respa = await $api.get(API_URL + '/api/wallet')
      return respa.data
   }
   async getWalletAnalytics(walletList) {
      const respa = await $api.post(API_URL + '/api/wallet/analytics', walletList)
      return respa.data
   }
   async getHistory() {
      const respa = await $api.get(API_URL + '/api/history')
      return respa.data
   }
   async createWallet({ amount, coin: { symbol, coinId, label, img }, userId }) {
      const resp = await $api.post(API_URL + '/api/wallet', {
         amount,
         coin: {
            symbol,
            coinId,
            label,
            img
         },
         userId
      })
      return resp.data
   }
   async depositWallet(wallet, amount) {
      const resp = await $api.put(API_URL + `/api/wallet/${wallet._id}/deposit/${amount}`, wallet)
      return resp.data
   }
   async withDrawWallet(wallet, amount) {
      console.log('fetch', amount);
      const resp = await $api.put(API_URL + `/api/wallet/${wallet._id}/withdraw/${amount}`, wallet)
      return resp.data
   }
   async removeWallet(wallet) {
      const resp = await $api.post(API_URL + `/api/wallet/${wallet._id}/delete`, wallet)
      return resp
   }
   async getChartWallet(id) {
      const resp = await $api.get(API_URL + `/api/wallet/${id}/chart`)
      return resp.data
   }
   async convertCrypto(coinId, currency) {
      const resp = await $api.get(API_URL + `/api/convert/${coinId}/${currency}`)
      const { target, currency: curr, crypto } = resp.data
      return { target, currency: curr, crypto }
   }
   async getCoinsList() {
      const resp = await $api.get(API_URL + '/api/coins/list')
      return resp.data
   }
}

class NextApiFetch {
   async getCurrencyOptions() {
      const resp = await fetch('api/currency/option')
      return resp.json()
   }
   async getCoinsOptions() {
      const resp = await fetch('api/coin/option')
      return resp.json()
   }
   async getCurrencys() {
      const resp = await fetch('api/currency')
      return resp.json()
   }
}
export const FetchWallet = new WalletFetch()
export const FetchAuth = new AuthFetch()
export const NextApi = new NextApiFetch()

