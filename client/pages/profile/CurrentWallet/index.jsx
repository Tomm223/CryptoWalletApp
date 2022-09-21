import styles from './index.module.scss'
import { Button_Blue, Button_Green } from '../../../components/UI/Forms/buttons'
import { Percent, Profit, Total } from '../../../components/UI/BlockList/UI'
import { FetchWallet } from '../../../http/fetch'
import { useContext } from 'react'
import { StoreContext } from '../../_app'
import { observer } from 'mobx-react-lite'
import { SparkLine } from '../../../components/charts'
import { fixedCoinNum, fixedNum, floor } from '../../../utils.js/num'
import ChartLoader from '../../../components/UI/loaders/chart'
import { BorderNumberLoader, TextLoader } from '../../../components/UI/loaders/text'
import { ItemBalanceProfile, ItemHistory } from '../../../components/UI/BlockList/Items'


function CurrentWallet({ wallet, isLoading }) {
   const { user } = useContext(StoreContext)
   const { price, percentage, profit } = wallet.analytics
   const $curr_amount = floor(price.currency_amount)
   const $percentage = fixedNum(percentage)
   const $profit = floor(profit)
   const $amount = fixedCoinNum(wallet.amount)
   console.log($profit, 'profit');
   return (
      <div className={styles.block}>

         <div className={styles.block__coin}>
            <div className={styles.block__label}>
               <img className={styles.block__img} src={wallet.coin.img} alt="" />
               <div className={styles.block__name}>
                  <p className={styles.name__sub}>{wallet.coin.symbol}{user.currency.label}</p>
                  <p className={styles.name__name}>{wallet.coin.label}</p>
               </div>
            </div>
            <div className={styles.block__price}>
               {
                  $curr_amount ?
                     <p className={styles.block__price_item}>{$curr_amount} {user.currency.label}</p>
                     :
                     <TextLoader>1234332543</TextLoader>
               }
            </div>
            <div className={styles.block__btns}>
               <div className={styles.block__btn}>
                  <Button_Green onClick={() => alert('ggg')} disabled={!wallet.analytics.percentage} >deposit</Button_Green>
               </div>
               <div className={styles.block__btn}>
                  <Button_Green disabled={!wallet.analytics.percentage}>withdraw</Button_Green>
               </div>
            </div>
         </div>
         <div className={styles.block__sparkline}>
            <div className={styles.block__sparkline__chart}>
               {
                  wallet.analytics.sparkline.length ?
                     <SparkLine data={wallet.analytics.sparkline} />
                     :
                     <ChartLoader />
               }
            </div>
         </div>
         <div className={styles.block__footer}>
            <ItemBalanceProfile>
               <div></div>
               <Total amount={$amount} currancy={wallet.coin.symbol} />
               <Profit isLoading={isLoading} cout={$profit} currancy={user.currency.label} />
               <Percent isLoading={isLoading}>{$percentage}</Percent>
            </ItemBalanceProfile>
         </div>
      </div>
   )
}

export default observer(CurrentWallet)