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
      const resp = await gotingServer.getChartPriceWallet(wallet.coin.coinId, currency, newDate, getUnix())//FetchWallet.getChartWallet(wallet._id)
      const { target } = await gotingServer.convert(wallet.coin.coinId, currency)//FetchWallet.convertCrypto(wallet.coin.coinId, 'usd')   
      //
      wallet.analytics.profit = resp[resp.length - 1][1] - resp[0][1]
      wallet.analytics.percentage = resp[resp.length - 1][1] / resp[0][1] * 100 - 100
      return {
         wallet,
         amountCurrency: {
            start: resp[0][1] * wallet.amount,
            end: resp[resp.length - 1][1] * wallet.amount
         }
      }
   };

}

module.exports = new WalletService()