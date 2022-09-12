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
const getUnix = require('./utils.js')
const fixedNum = require('./utils.js')

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


io.on('connection', (client) => {
    let num = Math.floor(Math.random() * 10)
    const intrvalMarket = setInterval(() => {
        console.log('date', num)
        io.emit('check_market')
    }, 120000)

    client.on('disconnect', () => {
        console.log('end');
        clearInterval(intrvalMarket)
    })
    client.on('check_market', async (bodyQuery) => {
        try {
            const resp = await gotingServer.getMarketCoins(bodyQuery)
            console.log('before_resp');
            io.emit('market', resp)
        }
        catch (e) {
            io.emit('error', e)
        }

    })

    client.on('market', async (client) => {
        console.log('start_market', client.page);
        const resp = await gotingServer.getMarketCoins(client)
        io.emit('market', resp)
    })


    client.on('get', async (client) => {
        const resp = await gotingServer.getCoinById(client.message)
        io.emit('return', resp)
    })

    client.on('coin', (client) => {
        //setInterval(() => {
        const resp = async () => {
            const resp = await gotingServer.getCoinById(client.id)
            io.io.emit('coin', resp)
        }
        resp()
        // }, interval)
    })
    client.on('convert_list', (client) => {
        //
    })
    client.on('convert', async ({ crypto, currency }) => {
        //setInterval(async () => {
        const { target } = await gotingServer.convert(crypto, currency)
        io.emit('convert', target)
        // }, interval)
    })

    client.on('disconnection', () => {
        clearInterval(intrvalMarket)
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




