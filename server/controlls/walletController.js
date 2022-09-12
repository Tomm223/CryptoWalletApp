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

   async walletListAnalytics(req, res) {
      try {
         const list = req.body
         const userData = req.user

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
                  setTimeout(() => go(i + 1), 2000)
               })
            }
            else {
               total_wallet.profit = total_wallet.total - startMoney
               total_wallet.percentage = total_wallet.total / startMoney * 100 - 100
               console.log('blia');
               res.json({ list: newList, totalWallet: total_wallet })
            }
         }
         go()


      }
      catch (e) {
         console.log(e);
         res.status(400).json({ message: 'при подсчета аналитики произошла ошибка' })
      }
   }
}

module.exports = new walletController()


