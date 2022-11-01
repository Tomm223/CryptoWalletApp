// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export function getCoinMarkets(req, res) {
  res.status(200).json({
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    "current_price": 1886.23,
    "market_cap": 226391027867,
    "market_cap_rank": 2,
    "fully_diluted_valuation": null,
    "total_volume": 16076874707,
    "high_24h": 1928.24,
    "low_24h": 1864.76,
    "price_change_24h": -17.09951662090316,
    "price_change_percentage_24h": -0.8984,
    "market_cap_change_24h": -2591004508.1672974,
    "market_cap_change_percentage_24h": -1.13153,
    "circulating_supply": 120117268.627605,
    "total_supply": 120117268.627605,
    "max_supply": null,
    "ath": 4878.26,
    "ath_change_percentage": -61.375,
    "ath_date": "2021-11-10T14:24:19.604Z",
    "atl": 0.432979,
    "atl_change_percentage": 435077.85571,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 103.88875037689154,
      "currency": "btc",
      "percentage": 10388.875037689155
    },
    "last_updated": "2022-08-16T08:02:22.094Z",
    "price_change_percentage_1h_in_currency": 0.22882380510095193
  })
}

const search = {
  "coins": [
    {
      "id": "yearn-finance",
      "name": "yearn.finance",
      "symbol": "YFI",
      "market_cap_rank": 136,
      "thumb": "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png",
      "large": "https://assets.coingecko.com/coins/images/11849/large/yfi-192x192.png"
    },
  ],
  "exchanges": [
    {
      "id": "xt",
      "name": "XT.COM",
      "market_type": "spot",
      "thumb": "https://assets.coingecko.com/markets/images/404/thumb/logo400x400.png",
      "large": "https://assets.coingecko.com/markets/images/404/large/logo400x400.png"
    },
  ],
  "icos": [],
  "categories": [
    {
      "id": 1,
      "name": "Artificial Intelligence"
    }
  ],
  "nfts": [
    {
      "id": "treeverse-plots",
      "name": "Treeverse Plots",
      "symbol": "",
      "thumb": "https://assets.coingecko.com/nft_contracts/images/266/thumb/treeverse-plots.png"
    }
  ]
}

/*
const [socket, setSocket] = useState(null);
const [socketConnected, setSocketConnected] = useState(false);

socket.current = io(`${API_URL}`, {
      withCredentials: true,
      extraHeaders: {
        "secretHeader": "secret value"
      }
    })
*/
// establish socket connection
/*
useEffect(() => {
  setSocket(
    io(API_URL)
  )
}, []);

// subscribe to the socket event
useEffect(() => {
  if (!socket) return;

  socket.on('connect', () => {
    setSocketConnected(socket.connected);
    socket.emit('markets', {
      page: market.page,
      limit: market.limit,
      currency: user.currency
    })
    socket.on('markets', (data) => {
      market.refresh(data)

    })
  });
  socket.on('disconnect', () => {
    setSocketConnected(socket.connected);
  });
  socket.on('convert', (data) => {
    console.log(data);
  })
  socket.on('convert_list', (data) => {
    console.log(data);
  })
  return () => {
    //socket.emit('market', { out: true })
  }
}, [socket]);
console.log(socketConnected);

useEffect(() => {
  if (socketConnected) {

  }
}, [socketConnected])
*/
////

const getWallet = async () => {
  const respa = await $api.get('http://localhost:5000/api/wallet')
  console.log('refresh', respa.data);
}
const getHistory = async () => {
  const respa = await $api.get('http://localhost:5000/api/history')
  console.log(respa.data);

}
const ssum3 = async () => {
  const respa = await $api.post('http://localhost:5000/auth/registration', {
    email: 'dan.osipov99@mail.ru',
    password: 'daniil',
    username: 'Daniil',
    lastname: 'Osipov'
  })
  console.log('registr', respa);
  localStorage.setItem('token', respa.data.token)
  localStorage.setItem('user', JSON.stringify(respa.data.user))
}
const login = async () => {
  const respa = await $api.post('http://localhost:5000/auth/login', {
    email: 'dan.osipov99@mail.ru',
    password: 'daniil',
  })
  console.log('login', resp.data);
}

const logout = async () => {
  const resp = await $api.get('http://localhost:5000/auth/logout')
  if (resp.data.logout) {
    console.log(resp.data.message);
    localStorage.removeItem('token')
  }
}
const registr = async () => {
  const respa = await $api.post('http://localhost:5000/auth/registration', {
    email: 'test2.reg.@mail.ru',
    password: 'test2',
    username: 'Test2',
    lastname: 'Test2',

  })
  console.log('login', respa);
  if (respa?.data?.token) {
    localStorage.setItem('token', respa.data.token)
  }
}
const newWallet = async () => {
  const resp = await $api.post('http://localhost:5000/api/wallet', {
    coin: {
      coinId: "NEW22",
      label: "NEW22",
      symbol: "NEW22",
      img: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
    },
    amount: 1000.000,
    userId: "6307231b7633132f088a24b5"
  })
  console.log(resp.data);
}
const depositWallet = async () => {
  const resp = await $api.put('http://localhost:5000/api/wallet/63074bfc68dc9027480b07ba/deposit/1', {
    //_id: '63074bfc68dc9027480b07ba',
    coin: {
      coinId: "InfoForHistory",
      label: "1",
      symbol: "1"
    },
    amount: 'любое число',
    userId: "6307231b7633132f088a24b5"

  })
  console.log(resp.data);
}
const withDrawWallet = async () => {
  const resp = await $api.put('http://localhost:5000/api/wallet/63074bfc68dc9027480b07ba/withdraw/100', {
    coin: {
      coinId: "bitcoin",
      label: "Bitcoin",
      symbol: "BTC"
    },
    amount: 1000.000,
    userId: "6307231b7633132f088a24b5"
  })
  console.log(resp);
}
const removeWallet = async () => {
  const resp = await $api.post('http://localhost:5000/api/wallet/630daeb4361b051200c3e248/delete', {
    amount: 1.0542,
    coin: { coinId: 'LAST', label: 'LAST', symbol: 'LAST', img: ' хуево' },
    date: "2022-08-25T10:48:11.335Z",
    userId: "6307231b7633132f088a24b5",
    _id: "6307536bf8c87f2f747dd058",
  })
  console.log(resp.data);
}