
import { fixedNum, floor } from '../../../utils.js/num'
import { Percent, Profit, Total } from '../../UI/BlockList/UI'
import { BorderNumberLoader, TextLoader } from '../../UI/loaders/text'
import styles from './index.module.scss'

export default function Balance({ walletTotal, isloading, currancy }) {

   const { total, percentage, profit } = walletTotal
   const $total = floor(total)
   const $percentagenum = fixedNum(percentage)
   const $profitnum = floor(profit)
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
            <Total isLoading={isloading} amount={$total} currancy={currancy} />
         </div>
         <div className={styles.footer}>
            <p className={styles.footer__label}>Monthly Profit</p>
            <div className={styles.footer__profit}>
               <Profit isLoading={isloading} currancy={currancy} count={$profitnum} />
            </div>
            <Percent isLoading={isloading}>{$percentagenum}</Percent>
         </div>
      </div>


   )
}

