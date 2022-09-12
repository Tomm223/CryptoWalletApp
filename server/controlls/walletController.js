const Wallet = require("../models/Wallet")
const WalletService = require("../service/WalletService")
const historyService = require("../service/historyService")


class walletController {
   async addNewWallet(req, res) {
      try {
         const userData = req.user
         const body = req.body
         if (userData) {
            await Wallet.findOneAndUpdate({ userId: userData.id }, { $push: { 'list': body } })
            await historyService.saveHistory(userData.id, req.history)
            const mywallet = await Wallet.findOne({ userId: userData.id })
            res.status(200).json(mywallet)
         }
         else {
            return res.status(403).json({ message: 'не авторизован' })
         }
      }
      catch (e) {
         res.status(400).json({ message: 'что-то пошло не так' })
      }
   }
   async deposit(req, res) {
      const userData = req.user
      const walletId = req.params.id
      const diffNum = parseInt(req.params.difference) // разница
      try {
         const myWallet = await Wallet.findOne({ userId: userData.id })
         const newWallet = WalletService.depositWithDraw(true, myWallet, diffNum, walletId)
         await newWallet.save()
         await historyService.saveHistory(userData.id, req.history)
         const resWallet = await Wallet.findOne({ userId: userData.id })
         res.status(200).json(resWallet)
      }
      catch (e) {
         console.log(e);
         res.status(400).json({ message: 'что-то пошло не так' })
      }
   }
   async withdraw(req, res) {
      const userData = req.user
      const walletId = req.params.id
      const diffNum = parseInt(req.params.difference) // разница
      try {
         const myWallet = await Wallet.findOne({ userId: userData.id })
         const newWallet = WalletService.depositWithDraw(false, myWallet, diffNum, walletId)
         await newWallet.save()
         await historyService.saveHistory(userData.id, req.history)
         res.json({ message: 'wallet' })
      }
      catch (e) {
         res.status(400).json({ message: 'что-то пошло не так' })
      }
   }

   async removeWallet(req, res) {
      try {
         const userData = req.user
         const id = req.params.id
         if (userData) {
            await Wallet.findOneAndUpdate({ userId: userData.id }, { $pull: { 'list': { _id: id } } })
            await historyService.saveHistory(userData.id, req.history)
            const myWallet = await Wallet.findOne({ userId: userData.id })
            res.status(200).json(myWallet)
         }
         else {
            return res.status(403).json({ message: 'не авторизован' })
         }
      }
      catch (e) {
         res.status(400).json({ message: 'что-то пошло не так' })
      }
   }
   async walletAnalytics(req, res) {
      try {
         const wallet = req.body
         const userData = req.user
         console.log('перед');
         const { wallet: newWallet } = await WalletService.walletAnalytics(wallet, userData.currency.value)
         console.log('после2');
         res.json(newWallet)
      }
      catch (e) {
         console.log(e);
         res.status(400).json({ message: 'данные отсутвуют' })
      }
   }
   async walletListAnalytics(req, res) {
      try {
         const list = req.body
         const userData = req.user

         const total_wallet = {
            total: 0,
            percentage: 0,
            profit: 0
         }
         let newList = []
         const go = (i = 0) => {
            if (i < list.length) {
               WalletService.walletAnalytics(list[i], userData.currency.value).then(({ wallet, amountCurrency }) => {
                  console.log('gooo');
                  newList.push(wallet)
                  total_wallet.total += amountCurrency
                  total_wallet.percentage += wallet.analytics.percentage / list.length
                  total_wallet.profit += wallet.analytics.profit / list.length
                  go(i + 1)
               })
            }
            else {
               console.log('blia');
               res.json({ list: newList, totalWallet: total_wallet })
            }
         }
         go()
         //const total_wallet = {}
         //total_wallet.profit = profit / this.list.length
         //total_wallet.percentage = percentage / this.list.length
         //total_wallet.total = Math.floor(total)

      }
      catch (e) {
         console.log(e);
         res.status(400).json({ message: 'при подсчета аналитики произошла ошибка' })
      }
   }
}

module.exports = new walletController()




/*
await Promise.all(list.map(async (wallet) => {
            const resp = await gotingServer.getChartPriceWallet(wallet.coin.coinId, userData.currency.value, wallet.date, getUnix())//FetchWallet.getChartWallet(wallet._id)
            const { target, crypto, currency } = await gotingServer.convert(wallet.coin.coinId, userData.currency.value)//FetchWallet.convertCrypto(wallet.coin.coinId, 'usd')   
            //
            coun++
            console.log(coun);

            profit += resp[resp.length - 1][1] - resp[0][1]
            percentage += resp[resp.length - 1][1] / resp[0][1] * 100 - 100
            total += resp[resp.length - 1][1] * target
            //
            wallet.analytics.profit = resp[resp.length - 1][1] - resp[0][1]
            wallet.analytics.percentage = resp[resp.length - 1][1] / resp[0][1] * 100 - 100
            return wallet
         }));






           const newWallet = async (wallet) => {
            const resp = await gotingServer.getChartPriceWallet(wallet.coin.coinId, userData.currency.value, wallet.date, getUnix())//FetchWallet.getChartWallet(wallet._id)
            const { target, crypto, currency } = await gotingServer.convert(wallet.coin.coinId, userData.currency.value)//FetchWallet.convertCrypto(wallet.coin.coinId, 'usd')   
            //
            coun++
            console.log(coun);

            profit += resp[resp.length - 1][1] - resp[0][1]
            percentage += resp[resp.length - 1][1] / resp[0][1] * 100 - 100
            total += resp[resp.length - 1][1] * target
            //
            wallet.analytics.profit = resp[resp.length - 1][1] - resp[0][1]
            wallet.analytics.percentage = resp[resp.length - 1][1] / resp[0][1] * 100 - 100
            return wallet
         };

*/