import styles from './index.module.scss'
import { CountCoin, Percent, Profit } from '../../UI/BlockList/UI'
export default function CoinWallet({ analytics, currancy, amount, coin }) {
   const { label, symbol, img } = coin
   const { profit, percentage } = analytics

   return (
      <div className={`${styles.block} box s`}>
         <div className={styles.block__main}>
            <div className={styles.block__coin}>
               <div className={styles.block__label}>
                  <img className={styles.block__img} src={img} alt="" />
                  <div className={styles.block__name}>
                     <p className={styles.name__sub}>{symbol}user.curr</p>
                     <p className={styles.name__name}>{label}</p>
                  </div>
               </div>
               <div className={styles.block__price}>
                  <p className={styles.block__price_item}>{amount}use.curr</p>
               </div>
            </div>
            <div className={styles.block__chart}>
               <img src="/icon/chart-wallet.png" alt="" />
            </div>
         </div>
         <div className={styles.block__footer}>
            <p className={styles.footer__label}>PNL Daily</p>
            {
               profit ?
                  <Profit count={profit} currancy={currancy} />
                  :
                  <div>loading...</div>
            }
            {
               percentage ?
                  <Percent>{percentage}</Percent>
                  :
                  <div>Loading...</div>
            }
         </div>
      </div>
   )
}