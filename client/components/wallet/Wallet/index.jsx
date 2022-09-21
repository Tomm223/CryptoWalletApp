import Balance from '../Balance'
import CoinWallet from '../CointWallet'
import styles from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { SocketContext, StoreContext } from '../../../pages/_app'
import { useEffect } from 'react'
import _ from 'lodash'
import { LoaderWalletCardList, WalletCardLoader } from '../../UI/loaders/wallet'
import Spinner from '../../UI/loaders/Spinner'

function Wallet() {

   const { wallet, user } = useContext(StoreContext)
   const { socket, socketConnected } = useContext(SocketContext)

   useEffect(() => {
      if (!socket || !socketConnected) return

      if (!wallet.list.length) {
         //socket.emit('wallet')
      }

   }, [socketConnected]);
   /*
      // обработка особенности mode dev dable start
      let num = 0
      const fetchingWallet = () => {
         num++
         if (num > 1) return
         wallet.fetchWallets()
         setTimeout(() => console.log('refetch 5s'), 5000)
      }
      const getCookieDate = (cookieData) => {
         num++
         if (num > 1) return
         wallet.setWallet(cookieData)
         setTimeout(() => console.log('refetch 5s'), 5000)
      }
   
      //seting wallet store
      useEffect(() => {
         // check data in cookie
         const wallet_store = cookie.get('wallet_store')
         if (wallet_store) {
            getCookieDate(JSON.parse(wallet_store))
         }
         else if (!wallet_store) {
            fetchingWallet() // эта функция для избежания второго вызова при mode dev
            //wallet.fetchWallets()
         }
      }, []);
   */
   //save wallet to cookie
   // хз как

   return (
      <ul className={styles.list}>
         <li className={styles.item}>
            <Balance
               walletTotal={wallet.totalWallet}
               isloading={wallet.isloading}
               currancy={user.currency.label}
            />
         </li>
         {
            wallet.list.length ?
               wallet.list.map(item => {
                  return <li key={item.id} className={styles.item}>
                     <CoinWallet
                        isloading={wallet.isloading}
                        analytics={item.analytics}
                        amount={item.amount}
                        coin={item.coin}
                        currancy={user.currency.label}
                     />
                  </li>
               })
               : wallet.isloading ? <Spinner /> : <div>You don't have wallets</div>
         }


      </ul>
   )
}

export default observer(Wallet)