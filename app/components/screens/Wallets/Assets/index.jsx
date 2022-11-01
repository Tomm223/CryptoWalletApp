import styles from './index.module.scss'
import stylesPage from '../index.module.scss'
import stylesMarket from '../../markets/index.module.scss'
import { ItemProfile as Item, ItemBalanceProfile as ItemBalance } from 'app/assets/styledComponents/Items'
import { Percent, Profit, Total } from '@/components/UI/BlockList/UI'
import { fixedCoinNum, fixedNum, floor } from '@/utils/num'
import BlockList from '@/components/UI/BlockList'
import { memo } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/wallet-logo.png'
function Assets({ balance, list, userCurrency, isLoading }) {
   const $total = floor(balance.total)
   const $percentage = fixedNum(balance.percentage)
   const $profit = fixedNum(balance.profit)


   return (
      <div className={stylesPage.assets}>
         <BlockList label={'Assets'}>
            <div className={styles.balance}>
               <div className={styles.balance__label}>
                  <div className={styles.balance__img}>
                     <Image src={logo} />
                  </div>
                  <p className={styles.balance__name}>Balance</p>
               </div>
               <div className={styles.balance__price}>
                  <Total isLoading={isLoading} amount={$total} currancy={userCurrency} />
               </div>
               <div className={styles.balance__profit}>
                  <Profit isLoading={isLoading} count={$profit} currancy={userCurrency} />
               </div>
               <Percent isLoading={isLoading}>
                  {$percentage}
               </Percent>
            </div>
            {/* это то же самое что и markets + transactions */}

            <ul className={styles.assets__list}>
               {list.map((item) => {
                  const $amount = fixedCoinNum(item.amount)
                  const $currencyPrice = floor(item.analytics.price.currency_amount)
                  const $profit = floor(item.analytics.profit)
                  const $percentage = fixedNum(item.analytics.percentage)
                  return (
                     <Item key={item._id}>
                        <div className={stylesMarket.name}>
                           <img className={stylesMarket.name__img} src={item.coin.img} alt="" />
                           <div className={stylesMarket.label}>
                              <span className={stylesMarket.label__name}>{item.coin.label}</span>
                              <span className={stylesMarket.label__symbol}>{item.coin.symbol}</span>
                           </div>
                        </div>
                        <p className={stylesMarket.price}>
                           <Total amount={$amount} currancy={item.coin.symbol} />
                        </p>
                        <Total isLoading={isLoading} amount={$currencyPrice} currancy={userCurrency} />
                        <Profit isLoading={isLoading} count={$profit} currancy={userCurrency} />
                        <Percent isLoading={isLoading}>
                           {$percentage}
                        </Percent>
                     </Item>
                  )
               })}
            </ul>

         </BlockList>
      </div>
   )
}
export default memo(Assets)
