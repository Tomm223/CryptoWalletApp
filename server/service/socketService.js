class socketService {
   async walletFunc(socket) {
      try {
         if (!userData) {
            console.log('err');
            throw ''
         }
         const wallet = await WalletService.getWallet(userData)
         client.emit('wallet', wallet)

         //analytics
         if (wallet.list.length) {
            const list = wallet.list
            const total_wallet = {
               total: 0,
               percentage: 0,
               profit: 0
            }
            let startMoney = 0
            let newList = []
            const go = (i = 0) => {
               if (i < list.length) {
                  WalletService.walletAnalytics(list[i], userData.currency.value).then(({ wallet, amountCurrency }) => {
                     newList.push(wallet)
                     total_wallet.total += amountCurrency.end
                     startMoney += amountCurrency.start
                     console.log(i);
                     setTimeout(() => go(i + 1), 1000)
                  })
               }
               else {
                  total_wallet.profit = total_wallet.total - startMoney
                  total_wallet.percentage = total_wallet.total / startMoney * 100 - 100
                  client.emit('wallet_analytics', { list: newList, totalWallet: total_wallet })
               }
            }
            go()
         }
      }
      catch (e) {
         clearInterval(intervalWallet)
         client.emit('auth', { status: 403 })
      }
   }
}

module.exports = new socketService()