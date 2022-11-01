import CoinWallet from '@/components/shared/wallet/CointWallet'
import Spinner from '@/components/UI/loaders/Spinner'
import AddWallet from '@/components/shared/wallet/AddWallet'
import styles from './index.module.scss'
import stylesMain from '../index.module.scss'
import Balance from '@/components/shared/wallet/Balance'
function ProfiledWallet({ wallet, walletActive, userCurrency, setWalletActive }) {

   return (
      <ul className={stylesMain.wallets__list}>
         <li key={'balance'} className={stylesMain.wallets__item_total}>
            <Balance
               currancy={userCurrency}
               isloading={wallet.isloading}
               walletTotal={wallet.totalWallet}
            />
         </li>
         {
            wallet.list.length ?
               wallet.list.map((item) => {
                  const clas = walletActive?._id === item?._id ?
                     stylesMain.wallets__item_active : stylesMain.wallets__item
                  return <li onClick={() => setWalletActive(item)} key={item._id} className={clas}>
                     <CoinWallet
                        isloading={wallet.isloading}
                        analytics={item.analytics}
                        amount={item.amount}
                        coin={item.coin}
                        currancy={userCurrency}
                     />
                  </li>
               })
               : !wallet.isloading && wallet.loader ?
                  <li key={'load'} className={styles.unHave}>
                     <Spinner />
                  </li>
                  :
                  !wallet.list.length ?
                     <li key={'un'} className={styles.unHave}>You don't have wallets</li>
                     :
                     <li key={'hz'}>хз че</li>
         }


      </ul>

   )
}

export default ProfiledWallet