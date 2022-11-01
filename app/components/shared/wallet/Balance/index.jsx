
import { fixedNum, floor } from '@/utils/num'
import { Percent, Profit, Total } from '../../../UI/BlockList/UI/index'
import styles from './index.module.scss'
import Image from 'next/image'
import View from "@/assets/images/view.svg"
import Logo from '@/assets/images/wallet-logo.svg'

export default function Balance({ walletTotal, isloading, currancy }) {

   const { total, percentage, profit } = walletTotal
   const $total = floor(total)
   const $percentagenum = fixedNum(percentage)
   const $profitnum = floor(profit)
   return (
      <div className={`${styles.block} box s`}>
         <div className={styles.head}>
            <div className={styles.head__label}>
               <Logo className={styles.head__img} />
               <p className={styles.head__name}>Estimated Balance</p>
            </div>
            <div className={styles.head__view}>
               <View />
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

