import Balance from '../../../shared/wallet/Balance'
import CoinWallet from '../../../shared/wallet/CointWallet'
import styles from './index.module.scss'
import Spinner from '../../../UI/loaders/Spinner'
import { memo } from 'react'

function DashboardWallet({ list, isloading, loader, totalWallet, userCurrency, isAuth }) {
   return (
      <ul className={styles.list}>
         <li className={styles.item}>
            <Balance
               key={'total'}
               walletTotal={totalWallet}
               isloading={isloading}
               currancy={userCurrency}
            />
         </li>

         {isAuth ?
            list.length ?
               list.map(item => {
                  console.log(item.analytics);
                  return <li key={item._id} className={styles.item}>
                     <CoinWallet
                        isloading={isloading}
                        analytics={item.analytics}
                        amount={item.amount}
                        coin={item.coin}
                        currancy={userCurrency}
                     />
                  </li>
               })
               : !isloading && loader ?
                  <li className={styles.item} key='spin'>
                     <Spinner />
                  </li>
                  :
                  !list.length ?
                     <div key='not' className={styles.unHave}>You don't have wallets</div>
                     :
                     <></>
            :
            <div key='not auth' className={styles.unHave}>You don`t have account</div>

         }

      </ul>

   )
}

export default memo(DashboardWallet)