const { Schema, model } = require('mongoose')

const walletItem = new Schema({
   userId: { type: String, required: true },
   coin: {
      coinId: { type: String, required: true },
      label: { type: String, required: true },
      symbol: { type: String, required: true },
      img: { type: String, required: true },
   },
   date: {
      type: Number,
      required: true
   },
   amount: { type: Number, required: true },
})
const Wallet = new Schema({
   userId: { type: String, required: true },
   list: [walletItem]
})


module.exports = model('Wallet', Wallet)
//module.exports = model('Wallet', Wallet)
