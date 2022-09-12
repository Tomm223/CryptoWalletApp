import $api from "."

class AuthFetch {
   async registration({ email, password, username, lastname }) {
      const respa = await $api.post('http://localhost:5000/auth/registration', {
         email, password, username, lastname
      })
      return respa.data
   }
   async login({ email, password }) {
      const respa = await $api.post('http://localhost:5000/auth/login', {
         email,
         password
      })
      return respa.data
   }
   async logout() {
      const resp = await $api.get('http://localhost:5000/auth/logout')
      return resp.data
   }
   generateURLForAvatar(imgFileName) {
      return `http://localhost:5000/auth/img/${imgFileName}`
   }
   async сhangeImgAvatar(file) {
      // недоработанно
   }
}
class WalletFetch {
   async getWallet() {
      const respa = await $api.get('http://localhost:5000/api/wallet')
      return respa.data
   }
   async getWalletAnalytics(walletList) {
      const respa = await $api.post('http://localhost:5000/api/wallet/analytics', walletList)
      return respa.data
   }
   async getHistory() {
      const respa = await $api.get('http://localhost:5000/api/history')
      return respa.data
   }
   async createWallet({ amount, coin: { symbol, coinId, label, img }, userId }) {
      const resp = await $api.post('http://localhost:5000/api/wallet', {
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
   async depositWallet(wallet, walletId, amount) {
      const resp = await $api.put(`http://localhost:5000/api/wallet/${walletId}/deposit/${amount}`, wallet)
      return resp.data
   }
   async withDrawWallet(wallet, amount) {
      const resp = await $api.put(`http://localhost:5000/api/wallet/${wallet._id}/withdraw/${amount}`, wallet)
      return resp.data
   }
   async removeWallet(wallet) {
      const resp = await $api.post(`http://localhost:5000/api/wallet/${wallet._id}/delete`, wallet)
      return resp
   }
   async getChartWallet(id) {
      const resp = await $api.get(`http://localhost:5000/api/wallet/${id}/chart`)
      return resp.data
   }
   async convertCrypto(coinId, currency) {
      const resp = await $api.get(`http://localhost:5000/api/convert/${coinId}/${currency}`)
      return resp.data
   }
}
export const FetchWallet = new WalletFetch()
export const FetchAuth = new AuthFetch()

