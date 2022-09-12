import Balance from '../Balance'
import CoinWallet from '../CointWallet'
import styles from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { SocketContext, StoreContext } from '../../../pages/_app'
import { useEffect } from 'react'
import cookie from 'js-cookie'

function Wallet() {

   const { wallet, user } = useContext(StoreContext)
   const { socket, socketConnected } = useContext(SocketContext)
   const [totalWallet, setTotalWallet] = useState({})
   useEffect(() => {
      setTotalWallet(wallet.totalWallet)
      //
      const wallet_store = cookie.get('wallet_store')
      if (wallet_store) {
         wallet.setWallet(wallet_store)
      }
      else if (!wallet_store) {
         wallet.fetchWallets()
      }
   }, [])
   console.log(wallet);

   useEffect(() => {
      setTotalWallet(wallet.totalWallet)
      if (!wallet.isloading && wallet.totalWallet.total > 0) {
         cookie.set('wallet_store', JSON.stringify({
            list: wallet.list,
            totalWalet: wallet.totalWallet,
            _id: wallet._id,
            userId: wallet.userId
         }), { expires: 1 / 24 / 4 })
      }
   }, [wallet.totalWallet])
   return (
      <ul className={styles.list}>
         <li className={styles.item}>
            {totalWallet.total === 0 || !user.userAnonim ?
               <div>LOADIng</div> : <Balance walletTotal={totalWallet} />
            }
         </li>
         {
            wallet.list.length ?
               wallet.list.map(wallet => {
                  return <li key={wallet.id} className={styles.item}>
                     <CoinWallet
                        analytics={wallet.analytics}
                        amount={wallet.amount}
                        coin={wallet.coin}
                        currancy={'USER.CURR'}
                     />
                  </li>
               })
               : <div>Loading...</div>
         }


      </ul>
   )
}

export default observer(Wallet)