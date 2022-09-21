const History = require('../models/History')
const Wallet = require('../models/Wallet')
const getUnix = require('../utils')
const gotingServer = require("../got/index")


class WalletService {
   async getWallet(userData) {
      try {
         const wallet = await Wallet.findOne({ userId: userData.id })
         const newList = wallet.list.map((item) => {
            const newItem = {
               coin: item.coin,
               _id: item._id,
               amount: item.amount,
               userId: item.userId,
               date: item.date,
               analytics: {
                  profit: 0,
                  percentage: 0,
                  sparkline: [],
                  price: {
                     currency_coin: 0,
                     currency_amount: 0
                  }
               }
            }
            return newItem
         })
         return { ...wallet._doc, list: newList }
      }
      catch (e) {
         return { message: 'что-то пошло не так' }
      }
   }
   async walletListAnalytics(list, userData) {
      try {
         const total_wallet = {
            total: 0,
            percentage: 0,
            profit: 0
         }
         let startMoney = 0
         let newList = []
         const go = (i = 0) => {
            if (i < list.length) {
               this.walletAnalytics(list[i], userData.currency.value).then(({ wallet, amountCurrency }) => {
                  newList.push(wallet)
                  total_wallet.total += amountCurrency.end
                  startMoney += amountCurrency.start
                  console.log(i);
                  setTimeout(() => go(i + 1), 2000)
               })
            }
            else {
               total_wallet.profit = total_wallet.total - startMoney
               total_wallet.percentage = total_wallet.total / startMoney * 100 - 100
               return { list: newList, totalWallet: total_wallet }
            }
         }
      }
      catch (e) {
         console.log(e);
         return { message: 'при подсчета аналитики произошла ошибка' }
      }
   }
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
      let resp = await gotingServer.getChartPriceWallet(wallet.coin.coinId, currency, wallet.date, getUnix())//FetchWallet.getChartWallet(wallet._id)
      resp = resp.map(item => item[1])
      const sparkline = resp.length > 25 ? resp.slice(-25) : resp
      const startAmount = resp[0] * wallet.amount
      const endAmount = resp[resp.length - 1] * wallet.amount

      wallet.analytics.profit = endAmount - startAmount
      wallet.analytics.percentage = endAmount / startAmount * 100 - 100
      wallet.analytics.sparkline = sparkline
      wallet.analytics.price.currency_coin = resp[resp.length - 1]
      wallet.analytics.price.currency_amount = endAmount
      return {
         wallet,
         amountCurrency: {
            start: startAmount,
            end: endAmount
         }
      }
   };

}

module.exports = new WalletService()