const Router = require('express')
const router = new Router()
const apiController = require('../controlls/apiController')
const walletController = require('../controlls/walletController')
const historyMiddleware = require('../middlewaree/historyMiddleware')

router.get('/userdto', apiController.getUser)
router.get('/wallet', apiController.getWallet)
router.get('/wallet/:id/chart', apiController.getChartWallet)
router.post('/wallet/analytics', walletController.walletAnalytics)
router.post('/wallet', historyMiddleware, walletController.addNewWallet)
router.put('/wallet/:id/deposit/:difference', historyMiddleware, walletController.deposit)
router.put('/wallet/:id/withdraw/:difference', historyMiddleware, walletController.withdraw)
router.post('/wallet/:id/delete', historyMiddleware, walletController.removeWallet)
router.get('/history', apiController.getHistory)
router.get('/convert/:crypto/:currency', apiController.ConvertCrypto)

module.exports = router



