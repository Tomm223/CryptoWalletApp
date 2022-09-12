import styles from './index.module.scss'
import { CountCoin, Percent, Profit, Total } from '../../UI/BlockList/UI'
import { fixedCoinNum, fixedNum, floor } from '../../../utils.js/num'
export default function CoinWallet({ isloading, analytics, currancy, amount, coin }) {
   const { label, symbol, img } = coin
   const { profit, percentage } = analytics
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
                  <Total amount={$amount} currancy={currancy} />

               </div>
            </div>
            <div className={styles.block__chart}>
               <img src="/icon/chart-wallet.png" alt="" />
            </div>
         </div>
         <div className={styles.block__footer}>
            <p className={styles.footer__label}>PNL Daily</p>
            {
               !isloading ?
                  <Profit count={$profit} currancy={currancy} />
                  :
                  <div>loading...</div>
            }
            {
               !isloading ?
                  <Percent>{$percentage}</Percent>
                  :
                  <div>Loading...</div>
            }
         </div>
      </div>
   )
}