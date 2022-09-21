import Addwallet from '../../../components/wallet/AddWallet'
import CoinWallet from '../../../components/wallet/CointWallet'
import Spinner from '../../../components/UI/loaders/Spinner'

export default function Wallets({ list, isloading, userCurrency }) {


   return (
      <div className={styles.wallets}>
         <ul className={styles.wallets__list}>
            <li className={styles.wallets__item}>
               <Addwallet />
            </li>
            {
               list.length ?
                  list.map((item) => {
                     return (
                        <li className={styles.wallets__item}>
                           <CoinWallet
                              isloading={isloading}
                              amount={item.amount}
                              analytics={item.analytics}
                              coin={item.coin}
                              currancy={userCurrency}
                           />
                        </li>
                     )
                  })
                  : isloading ?
                     <div className='spinnet_center_display'>
                        <Spinner />
                     </div> : <div>You don't have wallets.</div>
            }
         </ul>
      </div>
   )
}