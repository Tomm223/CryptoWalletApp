import styles from './index.module.scss'
import stylesPage from '../index.module.scss'
import stylesMarket from '../../markets/index.module.scss'
import { ItemProfile as Item, ItemBalanceProfile as ItemBalance } from '../../../components/UI/BlockList/Items'
import { Percent, Profit, Total } from '../../../components/UI/BlockList/UI'
import { fixedCoinNum, fixedNum, floor } from '../../../utils.js/num'
import { BorderNumberLoader, TextLoader } from '../../../components/UI/loaders/text'
import BlockList from '../../../components/UI/BlockList'

export default function Assets({ balance, list, userCurrency, isLoading }) {


   return (
      <div className={stylesPage.assets}>
         <BlockList label={'Assets'}>
            <div className={styles.balance}>
               <div className={styles.balance__label}>
                  <img className={styles.balance__img} src="/icon/wallet-logo.svg" alt="" />
                  <p className={styles.balance__name}>Balance</p>
               </div>
               <div className={styles.balance__price}>
                  <Total isLoading={isLoading} amount={balance.total} currancy={userCurrency} />
               </div>
               <div className={styles.balance__profit}>
                  <Profit isLoading={isLoading} count={balance.profit} currancy={userCurrency} />
               </div>
               <Percent isLoading={isLoading}>
                  {balance.percentage}
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
                     <Item>
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

/*
<div className={styles.assets}>
               <div className={styles.assets__header}>
                  <p className={styles.assets__label}>Assets</p>
                  <ItemBalance>
                     <div className={styles.balance__label}>
                        <img className={styles.balance__img} src="/icon/wallet-logo.svg" alt="" />
                        <p className={styles.balance__name}>Balance</p>
                     </div>
                     <p className={styles.price}>
                        {balance.total}
                        <span>{user.currency.label}</span>
                     </p>
                     <Profit count={balance.profit} currancy={user.currency.label} />
                     <Percent>
                        {balance.percentage}
                     </Percent>
                  </ItemBalance>
               </div>
               {/* это то же самое что и markets + transactions *//*}
 
<div className={styles.assets__main}>
<ul className={styles.assets__list}>
{wallet.list.map((item) => {
const $amount = fixedCoinNum(item.amount)
const $currencyPrice = floor(item.analytics.price.currency_amount)
const $profit = floor(item.analytics.profit)
const $percentage = fixedNum(item.analytics.percentage)
return (
<Item>
<div className={stylesMarket.name}>
<img className={stylesMarket.name__img} src={item.coin.img} alt="" />
<div className={stylesMarket.label}>
<span className={stylesMarket.label__name}>{item.coin.label}</span>
<span className={stylesMarket.label__symbol}>{item.coin.symbol}</span>
</div>
</div>
<p className={stylesMarket.price}>
<span>{item.amount}</span>
<span>{item.coin.symbol}</span>
</p>
<p className={stylesMarket.price}>
<span>{$currencyPrice}</span>
<span>{user.currency.label}</span>
</p>
<Profit count={$profit} currancy={user.currency.label} />
<Percent>
{$percentage}
</Percent>
</Item>
)
})}
</ul>
</div>

</div>
*/