import { userInfo } from 'os'
import { Percent, Profit, CountCoin } from '../../UI/BlockList/UI'
import styles from './index.module.scss'

export default function Balance({ walletTotal }) {
   const { total, percentage, profit } = walletTotal
   return (
      <div className={`${styles.block} box s`}>
         <div className={styles.head}>
            <div className={styles.head__label}>
               <img className={styles.head__img} src="/icon/wallet-logo.svg" alt="" />
               <p className={styles.head__name}>Estimated Balance</p>
            </div>
            <div className={styles.head__view}>
               <img src="/icon/view.svg" alt="" />
            </div>
         </div>
         <div className={styles.main}>
            <p className={styles.main__count}>{total}user.curr</p>
         </div>
         <div className={styles.footer}>
            <p className={styles.footer__label}>Monthly Profit</p>
            <div className={styles.footer__profit}>
               <Profit currancy={'user.currency'} count={profit} />
            </div>
            <Percent>{percentage}</Percent>
         </div>
      </div>


   )
}

