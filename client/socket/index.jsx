import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useContext } from "react"
import { SocketContext, StoreContext } from "../pages/_app"
import { getUnix } from "../utils.js/date"

function SocketLogic({ children }) {

   const { wallet, main, market, dashboard, user } = useContext(StoreContext)
   const { socket, socketConnected } = useContext(SocketContext)

   useEffect(() => {
      if (!socket || !socketConnected) return
      //auth
      socket.on('auth', (message) => {
         if (message.status === 403) {
            main.openLogin()
         }
      })
      socket.on('error', (message) => {
         main.pushErrors(message.message)
      })
      socket.on('message', (message) => {
         main.pushAlert(message.message)
      })

      //wallet
      socket.on('check_wallet', () => {
         socket.emit('wallet')
         console.log('check_wallet  work container');
      })

      socket.on('wallet', (walletData) => {
         if (walletData?.status === null) {
            return wallet.walletsZero()
         }
         wallet.setWallet(walletData)
      })
      socket.on('wallet_analytics', (walletData) => {
         wallet.setWalletAnalytics(walletData)
      })

      //market
      socket.on('market', (marketList) => {
         market.refresh(marketList)
      })
      socket.on('check_market', (msg) => {
         console.log('check_market  work container');
         socket.emit('market', {
            page: market.page,
            limit: market.limit,
            currency: user.currency.value
         })
      })

      // dashboard_market
      socket.on('dashboard_market', (marketList) => {
         dashboard.setMarket(marketList)
      })
      socket.on('check_dashboard_market', () => {
         console.log('check_dash_market  work container');
         socket.emit('dashboard_market', {
            page: dashboard.market._page,
            limit: dashboard.market._limit,
            currency: user.currency.value
         })
      })
      //BIG CHART
      socket.on('dashboard_chart', (data) => {
         //const needData = buildData(data)
         dashboard.setChartData(data)
      })
      socket.on('check_dashboard_chart', () => {
         if (dashboard.chart.chart_data.length) {
            fetchNewChart()
         }
      })
      //conver
      socket.on('convert', (data) => {
         //CONVERT ???
         console.log(data);
      })

   }, [socketConnected])


   const fetchNewChart = () => {
      const { value: dateStart, order } = dashboard.getChartTabsActive
      const unix = getUnix()
      socket.emit('dashboard_chart', {
         date: {
            start: dateStart,
            end: unix
         },
         order: order,
         coinId: dashboard.chart.coinId,
         currency: dashboard.chart.currency
      })
   }


   return (
      <>
         {children}
      </>
   )
}

export default observer(SocketLogic)