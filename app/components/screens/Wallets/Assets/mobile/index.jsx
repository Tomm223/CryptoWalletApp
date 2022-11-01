import { fixedCoinNum, fixedNum, floor } from '@/utils/num'
import styles from '../index.module.scss'
import stylesMarket from '@/components/screens/Markets/index.module.scss'
import { ItemAssetsMobile as Item } from 'app/assets/styledComponents/Items'
import { Percent, Profit, Total } from '@/components/UI/BlockList/UI'
import { Button_Green } from '@/components/UI/form/buttons'
import { memo, useContext, useState } from 'react'
import { WalletContext } from '@/context/WalletProvider'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '@/pages/_app'
import WalletModal from '@/components/shared/modals/wallet'

export default memo(({ openModal, list, isLoading, userCurrency: { curr_label, curr_value } }) => {



   return (
      <>
         <div className={styles.mobile}>
            <ul className={styles.assets__list}>
               {
                  list.map(item => {
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
                           <Profit isLoading={isLoading} count={$profit} currancy={curr_label} />
                           <div>
                              <Button_Green
                                 onClick={() => openModal({ wallet: item, isDeposit: true })}
                                 disabled={!item.analytics.price.currency_coin}
                              >Change</Button_Green>
                           </div>
                        </Item>
                     )
                  })
               }
            </ul>
         </div>
      </>

   )
})
