import styles from './index.module.scss'
import { CountCoin, Percent, Profit, Total } from '../../../UI/BlockList/UI'
import { fixedCoinNum, fixedNum, floor } from '@/utils/num'
import SparkLine from '../../charts/sparkline'
import ChartLoader from '../../../UI/loaders/chart'

export default function CoinWallet({ isloading, analytics, currancy, amount, coin }) {
   const { label, symbol, img } = coin
   const { profit, percentage, sparkline } = analytics
   const $amount = fixedCoinNum(amount)
   const $profit = floor(profit)
   const $percentage = fixedNum(percentage)

   return (
      <div className={`${styles.block} box s`}>
         <div className={styles.block__main}>
            <div className={styles.block__coin}>
               <div className={styles.block__label}>
                  <img className={styles.block__img} src={img} alt="" />
                  <div className={styles.block__name}>
                     <p className={styles.name__sub}>{symbol}</p>
                     <p className={styles.name__name}>{label}</p>
                  </div>
               </div>
               <div className={styles.block__price}>
                  <Total amount={$amount} currancy={coin.symbol} />
               </div>
            </div>
            <div className={styles.block__chart}>
               {
                  isloading ?
                     <ChartLoader />
                     :
                     <SparkLine style={{ width: '100%', minWidth: '135px' }} data={sparkline} />
               }

            </div>
         </div>
         <div className={styles.block__footer}>
            <p className={styles.footer__label}>PNL Daily</p>
            <Profit isLoading={isloading} count={$profit} currancy={currancy} />

            <Percent isLoading={isloading}>{$percentage}</Percent>

         </div>
      </div>
   )
}