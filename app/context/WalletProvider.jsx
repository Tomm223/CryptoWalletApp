import { useContext } from "react"
import { createContext } from "react"
import { FetchWallet } from "@/service/fetch"
import { SocketContext, StoreContext } from "@/pages/_app"
import { AuthContext } from "./AuthContainer"


export const WalletContext = createContext(null)


export default function WalletProvider({ children }) {

   const { main, history } = useContext(StoreContext)
   const { fetchUserData } = useContext(AuthContext)
   const { wallet } = useContext(StoreContext)

   const deposit = async (wallet, amount_coin) => {
      try {
         if (wallet.isloading) {
            //проверка не загрузку
            main.pushAlert('Дождитесь загрузки данных')
            return
         }
         const resp = await FetchWallet.depositWallet(wallet, amount_coin)
         const status = fetchUserData()
         if (status) {
            main.pushAlert('Изменениe прошли успешно')
         }
         else {
            throw ''
         }
      }
      catch (e) {
         main.pushErrors('Произошла ошибка, перезагрузите страницу')
      }

   }
   const withdraw = async (wallet, amount_coin) => {
      try {
         if (wallet.isloading) {
            //проверка не загрузку
            main.pushAlert('Дождитесь загрузки данных')
            return
         }
         const resp = await FetchWallet.withDrawWallet(wallet, amount_coin)
         console.log('status', resp);
         const status = fetchUserData()
         if (status) {
            main.pushAlert('Изменениe прошли успешно')
         }
         else {
            throw ''
         }
      }
      catch (e) {
         main.pushErrors('Произошла ошибка, перезагрузите страницу')
      }

   }
   const createWallet = async ({ amount, coin: { symbol, coinId, label, img }, userId }) => {
      try {
         if (wallet.isloading) {
            //проверка не загрузку
            main.pushAlert('Дождитесь загрузки данных')
            return
         }
         const resp = await FetchWallet.createWallet({ amount, coin: { symbol, coinId, label, img }, userId })
         const status = fetchUserData()
         if (status) {
            main.pushAlert('Изменениe прошли успешно')
         }
         else {
            throw ''
         }
      }
      catch (e) {
         main.pushErrors('Произошла ошибка, перезагрузите страницу')
      }

   }
   const removeWallet = async (wallet) => {
      try {
         if (wallet.isloading) {
            //проверка не загрузку
            main.pushAlert('Дождитесь загрузки данных')
            return
         }
         const resp = await FetchWallet.removeWallet(wallet)
         const status = fetchUserData()
         if (status) {
            main.pushAlert('Изменениe прошли успешно')
         }
         else {
            throw ''
         }
      }
      catch (e) {
         main.pushErrors('Произошла ошибка, перезагрузите страницу')
      }
   }

   return (
      <WalletContext.Provider value={{
         deposit, withdraw, createWallet, removeWallet
      }}>
         {children}
      </WalletContext.Provider>
   )
}