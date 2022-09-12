
import { fixedNum, floor } from '../../../utils.js/num'
import { Percent, Profit, Total } from '../../UI/BlockList/UI'
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
            {
               isloading ? <div>Loading...</div> :
                  <Total amount={$total} currancy={currancy} />
            }
         </div>
         <div className={styles.footer}>
            <p className={styles.footer__label}>Monthly Profit</p>
            <div className={styles.footer__profit}>
               {
                  isloading ? <div>Loading...</div> :
                     <Profit currancy={currancy} count={$profitnum} />
               }
            </div>
            {
               isloading ? <div>Loading...</div> :
                  <Percent>{$percentagenum}</Percent>
            }
         </div>
      </div>


   )
}

