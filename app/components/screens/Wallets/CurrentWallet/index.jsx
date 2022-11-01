import styles from './index.module.scss'
import { Button_Blue, Button_Green } from '@/components/UI/form/buttons'
import { Percent, Profit, Total } from '@/components/UI/BlockList/UI'
import { FetchWallet } from '@/service/fetch'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '@/pages/_app'
import { observer } from 'mobx-react-lite'
import SparkLine from '@/components/shared/charts/sparkline'
import { fixedCoinNum, fixedNum, floor } from '@/utils/num'
import ChartLoader from '@/components/UI/loaders/chart'
import { ItemBalanceProfile } from 'app/assets/styledComponents/Items'
import WalletModal from '@/components/shared/modals/wallet'
import { WalletContext } from '@/context/WalletProvider'


function CurrentWallet({ wallet, isLoading, toDefaultWallet }) {
   const { user, main } = useContext(StoreContext)
   const { price, percentage, profit } = wallet.analytics
   const $curr_amount = floor(price.currency_amount)
   const $percentage = fixedNum(percentage)
   const $amount = fixedCoinNum(wallet.amount)
   const $profit = floor(profit)
   // walletMODAL
   const [isOpenModal, setIsModalOpen] = useState(false)
   const [isDeposit, setIsDeposit] = useState(true)

   const { deposit, withdraw, removeWallet } = useContext(WalletContext)

   const changeWallet = async (body) => {
      const { isDeposit, currency, coin } = body
      //const { value, symbol, amount} = coin
      //const { value, symbol, amount} = currency
      if (isDeposit) {
         //пополнение
         await deposit(wallet, coin.amount)
         setIsModalOpen(false)
      }
      if (!isDeposit) {
         const total = fixedCoinNum(wallet.amount)
         const totalInput = fixedCoinNum(coin.amount)
         if (total == totalInput) {
            await removeWallet(wallet)
            setIsModalOpen(false)
            toDefaultWallet()
         }
         else {
            await withdraw(wallet, coin.amount)
            setIsModalOpen(false)
         }
      }



   }
   const changeWallet_check = (body) => {
      const { isDeposit, currency, coin } = body
      main.setChecker(`Are you sure you want to change the data to ${isDeposit ? "+" : '-'}${coin.amount} ${coin.symbol}`, () => changeWallet(body))
   }

   return (
      <div className={styles.block}>
         {isOpenModal ?
            <WalletModal
               wallet_amount={wallet.amount}
               onSubmit={changeWallet_check}
               toClose={() => setIsModalOpen(false)}
               isDeposit={isDeposit}
               coin={{
                  coin_label: wallet.coin.symbol,
                  coinId: wallet.coin.coinId,
                  coin_price: wallet.analytics.price.currency_coin
               }}
               currcency={{
                  curr_label: user.currency.label,
                  curr_value: user.currency.value,
               }}
            />
            :
            <></>
         }

         <div className={styles.block__coin}>
            <div className={styles.block__label}>
               <img className={styles.block__img} src={wallet.coin.img} alt="" />
               <div className={styles.block__name}>
                  <p className={styles.name__sub}>{wallet.coin.symbol}{user.currency.label}</p>
                  <p className={styles.name__name}>{wallet.coin.label}</p>
               </div>
            </div>
            <div className={styles.block__price}>
               <Total isLoading={isLoading} amount={$curr_amount} currancy={user.currency.label} />
            </div>
            <div className={styles.block__btns}>
               <div className={styles.block__btn}>
                  <Button_Green
                     onClick={() => { setIsDeposit(true); setIsModalOpen(true) }}
                     disabled={!wallet.analytics.price.currency_coin} >deposit</Button_Green>
               </div>
               <div className={styles.block__btn}>
                  <Button_Green
                     onClick={() => { setIsDeposit(false); setIsModalOpen(true) }}
                     disabled={!wallet.analytics.price.currency_coin}>withdraw</Button_Green>
               </div>
            </div>
         </div>
         <div className={styles.block__sparkline}>
            <div className={styles.block__sparkline__chart}>
               {
                  isLoading ?
                     <ChartLoader />
                     :
                     <SparkLine data={wallet.analytics.sparkline} />
               }
            </div>
         </div>
         <div className={styles.block__footer}>
            <ItemBalanceProfile>
               <div></div>
               <Total amount={$amount} currancy={wallet.coin.symbol} />
               <Profit isLoading={isLoading} count={$profit} currancy={user.currency.label} />
               <Percent isLoading={isLoading}>{$percentage}</Percent>
            </ItemBalanceProfile>
         </div>
      </div>
   )
}

export default observer(CurrentWallet)