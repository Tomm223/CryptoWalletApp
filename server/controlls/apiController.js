const UserDto = require('../dto/UserDto');
const jwt = require('jsonwebtoken');
const { secretAccess } = require('../config');
const Wallet = require('../models/Wallet');
const History = require('../models/History');
const gotingServer = require('../got/index');
const getUnix = require('../utils');

class apiController {
   async getUser(req, res) {
      try {
         const user = new UserDto({
            _id: '123',
            email: 'dan@', isactive: "привет"
         })

         res.json(user)
      }
      catch {
         res.status(400).json({ message: "нет пользователей" })
      }
   }

   async getWallet(req, res) {
      const userData = req.user
      try {
         if (userData) {
            const wallet = await Wallet.findOne({ userId: userData.id })
            res.status(200).json(wallet)
         }
         else {
            throw 'неполадки'
         }
      }
      catch (e) {
         res.status(400).json({ message: 'что-то пошло не так' })
      }
   }
   async getHistory(req, res) {
      try {
         const userData = req.user
         if (userData) {
            const history = await History.findOne({ userId: userData.id })
            res.status(200).json(history)
         }
         else {
            throw 'неполадки'
         }
      }
      catch (e) {
         res.status(400).json({ message: 'что-то пошло не так' })
      }
   }
   async getChartWallet(req, res) {
      try {
         const userData = req.user
         const { id } = req.params
         console.log('id', id);
         const myWalletList = await Wallet.findOne({ userId: userData.id })
         const myWallet = myWalletList.list.find((i) => i.id == id)
         console.log('wallet', myWallet);
         const dateEnd = getUnix()
         const dateStart = myWallet.date  //1661289329
         console.log('start', dateStart);
         const resp = await gotingServer.getChartPriceWallet(myWallet.coin.coinId, userData.currency.value, dateStart, dateEnd)
         res.status(200).json(resp)
      }
      catch (e) {
         console.log(e);
         res.status(400).json({ message: `при вычислении статистики кошелька произошла ошибка` })
      }
   }
   async ConvertCrypto(req, res) {
      try {
         const { currency, crypto } = req.params
         const resp = await gotingServer.convert(crypto, currency)
         res.status(200).json(resp)
      }
      catch {
         res.status(400).json({ message: 'при вычислении произошла цены ошибка' })
      }
   }
   async GetCoinList(req, res) {
      try {
         console.log('true');
         const resp = await gotingServer.getCoinsList()
         res.json(resp)
         console.log('true_end');
      }
      catch (e) {
         res.status(404).json({ message: 'произошла ошибка при запросе на монету' })
      }
   }
}

module.exports = new apiController()


/*

   ПЕРВЫЙ СПОСОБ РАБОТАЛ МОЖНО ЕГО ЧУТКА ПОШУЛУДИТЬ НО ЛУЧШЕ ТОГДА ВТОРОЙ ПРИДУМАННЫЙ ДОДЕЛАТЬ

         ЭТОТ НАДО ДОРАБОАТЬ НЕ ЗАМЕНЯЕТ (ВЕСЬ КОШЕЛЕК ПОЧЕМУ_ТО) 
let myWallet = await Wallet.findOne({ userId: userData.id })
            myWallet = myWallet.list.map(i => {
               if (i._id === '63075369f8c87f2f747dd057') {
                  i.amount = 999
               }
            })
            ЭТОТ ВРОДЕ СРАБОТАЛ НО НЕ ФАКТ
await Wallet.findOneAndUpdate({ userId: userData.id, 'list._id': "63074195f1ad4b1348d9b8a6" }, {
               $set: {
                  'list._id.$': {
                     coin: { coinId: 'bitcoin', label: 'Bitcoin', symbol: 'BTC' },
                     date: 1661424493822,
                     amount: 99.0542
                  }

               }
                })
*/