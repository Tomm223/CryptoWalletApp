import CoinWallet from '@/components/shared/wallet/CointWallet'
import Spinner from '@/components/UI/loaders/Spinner'
import styles from './index.module.scss'
import stylesMain from '../index.module.scss'
import { memo } from 'react'

export default memo(({ openModal, list, isloading, loader, userCurrency }) => {

   return (
      <ul className={stylesMain.wallets__list}>
         {
            list.length ?
               list.map((item) => {

                  return <li key={item.id} onClick={() => openModal({ wallet: item, isDeposit: true })} className={stylesMain.wallets__item}>
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
                  <li className={styles.unHave}>
                     <Spinner />
                  </li>
                  :
                  !list.length ?
                     <div className={styles.unHave}>You don't have wallets</div>
                     :
                     <div>хз че</div>
         }


      </ul>

   )
})

