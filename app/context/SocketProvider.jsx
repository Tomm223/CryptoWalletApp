import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "./AuthContainer"
import { SocketContext, StoreContext } from "@/pages/_app"
import { createContext } from "react"
export const SocketContainerContext = createContext(null)

function SocketProvider({ children }) {

   const { wallet, main, market, dashboard, user } = useContext(StoreContext)
   const { socket, socketConnected } = useContext(SocketContext)
   const { fetchUserData, reFetchToken } = useContext(AuthContext)

   useEffect(() => {
      if (!socket || !socketConnected) return
      // update_data
      socket.on('update_data', () => {
         socket.emit('wallet')
         socket.emit('market', {
            page: market.page,
            limit: market.limit,
            currency: user.currency.value
         })
         socket.emit('dashboard_market', {
            page: dashboard.market._page,
            limit: dashboard.market._limit,
            currency: user.currency.value
         })

      })
      socket.on('update_pending', () => {
         wallet.setIsLoading(true)
         // остальные взаимодействия на изменения с сервером ДОПИСАТЬ!
      })
      socket.on('update_fullfield', () => {
         wallet.setIsLoading(false)
      })
      //auth
      socket.on('authorization_true', () => {
         fetchUserData()
      })
      socket.on('authorization_false', () => {
         // здесь обработка того что с сокета пришло что не авторизован
         wallet.setLoader(false)
      })
      socket.on('auth', (message) => {
         if (message.status === 403) {
            reFetchToken()
         }
      })
      socket.on('error', (message) => {
         main.pushErrors(message.message)
      })
      socket.on('message', (message) => {
         main.pushAlert(message.message)
      })

      //wallet
      socket.on('wallet', (walletData) => {
         wallet.setWalletAnalytics(walletData)

      })
      //market
      socket.on('market', ({ list, total_page }) => {
         market.refresh(list, total_page)
      })

      // dashboard_market
      socket.on('dashboard_market', (marketList) => {
         dashboard.setMarket(marketList)
      })
      //BIG CHART
      socket.on('dashboard_chart', (data) => {
         dashboard.setChartData(data)
      })
   }, [socket, socketConnected])




   return (
      <SocketContainerContext.Provider value={{

      }}>
         {children}
      </SocketContainerContext.Provider>
   )
}

export default observer(SocketProvider)