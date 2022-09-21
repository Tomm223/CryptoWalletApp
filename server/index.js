const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.js')
const PORT = process.env.PORT || 5000
const apiRouter = require('./routes/api.js')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middlewaree/authMiddleware.js')
const gotingServer = require('./got')
const app = express()
const http = require('http')
const server = http.createServer(app)
const _ = require('lodash')
const getUnix = require('./utils/index.js')
const fixedNum = require('./utils/index.js')
const tokenService = require('./service/tokenService.js')
const WalletService = require('./service/WalletService.js')
const toUnix = require('./utils/toUnix')
const Floor = require('./utils/floor')
const fixedToFiveEnd = require('./utils/fixedToFiveEnd.js')
const buildChartData = require('./utils/buildChartData')
// socket
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
        allowedHeaders: ["secretHeader"],
        credentials: true
    }
})

//
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(cookieParser());
app.use(express.json())
app.use("/auth", authRouter)
app.use("/api", authMiddleware, apiRouter)

//socket started

const intervalGlobal = 30000;
let cc = 0


io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    const user = tokenService.validateAccessToken(token)
    if (user) {
        socket.userData = user
    }

    next();
});

io.on('connection', (client) => {
    const userData = client.userData
    let num = Math.floor(Math.random() * 10)
    const intervalMarket = setInterval(() => {
        console.log('date', num)
        client.emit('check_market')
    }, 300000)
    const intervalDashboardChart = setInterval(() => {
        console.log('date', num)
        client.emit('check_dashboard_chart')
    }, 305000)
    const intervalDashboardMarket = setInterval(async () => {
        console.log('date', num)
        client.emit('check_dashboard_market')
    }, 360000)
    const intervalWallet = setInterval(() => {
        console.log('wallet_check')
        if (userData) {
            io.emit('check_wallet')
        }
    }, 480000 /*480000 */)

    client.on('wallet', async (socket) => {
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
            else {
                client.emit('wallet', { status: null })
            }
        }
        catch (e) {
            clearInterval(intervalWallet)
            client.emit('auth', { status: 403 })
        }
    })

    // markets 

    client.on('dashboard_market', async (bodyQuery) => {
        try {
            const resp = await gotingServer.getMarketCoins(bodyQuery)
            console.log('dashboard_before_resp');
            client.emit('dashboard_market', resp)
        }
        catch (e) {
            client.emit('error', e)
        }

    })
    client.on('market', async (client) => {
        console.log('start_market', client);
        const resp = await gotingServer.getMarketCoins(client)
        io.emit('market', resp)
    })
    //chart
    client.on('dashboard_chart', async (body) => {
        try {
            const { date, order, coinId, currency } = body
            const { start, end } = date
            const resp = await gotingServer.getChartPriceWallet(coinId, currency, start, end)
            let needResp = resp.filter((elem, index) => index % order === 0 ? true : false)
            needResp.push(resp[resp.length - 1])
            needResp = needResp.map((elem) => {
                const price = elem[1] > 1 ? Floor(elem[1]) : fixedToFiveEnd(elem[1])
                return [toUnix(elem[0]), price]
            })
            needResp = buildChartData(needResp)
            client.emit('dashboard_chart', needResp)
        }
        catch (e) {
            console.log(e);
            client.emit('error', { message: 'при получении графика произошла ошибка' })
        }

    })
    //
    client.on('disconnect', () => {
        console.log('end');
        clearInterval(intervalDashboardChart)
        clearInterval(intervalMarket)
        clearInterval(intervalDashboardMarket)
        clearInterval(intervalWallet)
    })
    //
    client.on('convert', async ({ crypto, currency }) => {
        const { target } = await gotingServer.convert(crypto, currency)
        io.emit('convert', target)
    })
});

let sc = 0
const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://daniil:daniil@cluster0.06smrvn.mongodb.net/?retryWrites=true&w=majority`)
        server.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()





