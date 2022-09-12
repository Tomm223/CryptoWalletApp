const History = require('../models/History')
const Wallet = require('../models/Wallet')
const getUnix = require('../utils')
const gotingServer = require("../got/index")


class WalletService {

   depositWithDraw(isDeposit, wallet, diffNum, walletId) {
      wallet.list = wallet.list.map(item => {
         if (item.id === walletId) {
            if (isDeposit) {
               item.amount += diffNum
            }
            else {
               item.amount = item.amount - diffNum
            }

         }
         return item
      })
      return wallet
   }

   upDateWallet(wallet, newWallet) {
      const historyData = {
         userId: wallet.userId
      }
      wallet.list = wallet.list.map(item => {
         if (item.id === newWallet._id) {
            historyData.status = item.amount < newWallet.amount
            historyData.amount = newWallet.amount - item.amount
            historyData.coin = newWallet.coin
            item = newWallet
            item.date = getUnix()
            historyData.date = item.date
         }
         return item
      })
      return { historyData, wallet }
   }
   createWalletAndHistory(userId) {
      const walletModel = new Wallet({ userId: userId })
      const historyModel = new History({ userId: userId })
      return {
         walletModel,
         historyModel
      }
   }

   async walletAnalytics(wallet, currency) {
      const rand = Math.floor(Math.random() * 1000)
      const newDate = wallet.date + rand
      console.log('newdate', newDate);
      const resp = await gotingServer.getChartPriceWallet(wallet.coin.coinId, currency, newDate, getUnix())//FetchWallet.getChartWallet(wallet._id)
      console.log('между');
      //const { target } = await gotingServer.convert(wallet.coin.coinId, currency)//FetchWallet.convertCrypto(wallet.coin.coinId, 'usd')   
      console.log('после');
      const target = 21000

      //
      wallet.analytics.profit = resp[resp.length - 1][1] - resp[0][1]
      wallet.analytics.percentage = resp[resp.length - 1][1] / resp[0][1] * 100 - 100
      return {
         wallet,
         amountCurrency: resp[resp.length - 1][1] * target
      }
   };

}

module.exports = new WalletService()