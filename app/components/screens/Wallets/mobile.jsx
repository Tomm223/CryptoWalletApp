import MainLayuot from "@/components/layout/MainLayuot"
import styles from './index.module.scss'
import Assets_mobile from './Assets/mobile'
import Wallets_mobile from './Wallets/mobile'
import Balance from './Assets/mobile/total'
import { useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StoreContext } from "@/pages/_app"
import { WalletContext } from "@/context/WalletProvider"
import WalletModal from "@/components/shared/modals/wallet"
import { set } from "mobx"
import { fixedCoinNum } from "@/utils/num"
const Mobile = ({ userCurr: { curr_label, curr_value }, wallets, total, isLoading, loader }) => {

   const { main } = useContext(StoreContext)

   const [isOpenModal, setIsModalOpen] = useState(false)
   const [isDeposit, setIsDeposit] = useState(true)
   const [current_wallet, setCurrent_wallet] = useState(null)

   const { deposit, withdraw, removeWallet } = useContext(WalletContext)

   const changeWallet = async ({ isDeposit, currency, coin }) => {
      //const { value, symbol, amount} = coin
      //const { value, symbol, amount} = currency
      if (isDeposit) {
         //пополнение
         console.log(current_wallet);
         await deposit(current_wallet, coin.amount)
         setIsModalOpen(false)
      }
      if (!isDeposit) {
         const total = fixedCoinNum(current_wallet.amount)
         const totalInput = fixedCoinNum(coin.amount)
         if (total == totalInput) {
            await removeWallet(current_wallet)
            setIsModalOpen(false)
         }
         else {
            await withdraw(current_wallet, coin.amount)
            setIsModalOpen(false)
         }
      }
      setCurrent_wallet(null)
   }
   const changeWallet_check = (body) => {
      const { isDeposit, currency, coin } = body
      main.setChecker(`Are you sure you want to change the data to ${isDeposit ? "+" : '-'}${coin.amount} ${coin.symbol}`, () => changeWallet(body))
   }

   const openModal = ({ wallet, isDeposit, }) => {
      setIsDeposit(isDeposit);
      setCurrent_wallet(wallet);
   }
   const toCloseModal = () => { setCurrent_wallet(null); setIsModalOpen(false) }
   useEffect(() => {
      if (current_wallet) {
         setIsModalOpen(true)
      }
   }, [current_wallet])


   return (
      <MainLayuot>
         <div className={styles.main}>
            <Balance
               totalWallet={total} isLoading={isLoading} userCurrency={curr_label}
            />
            <div className={styles.wallets}>
               <Wallets_mobile
                  list={wallets}
                  isloading={isLoading}
                  loader={loader}
                  userCurrency={curr_label}
                  openModal={openModal}
               />
            </div>
            <div className={styles.assets}>
               <Assets_mobile
                  openModal={openModal}
                  list={wallets}
                  isLoading={isLoading}
                  userCurrency={{
                     curr_label: curr_label,
                     curr_value: curr_value
                  }}
               />
            </div>
         </div>
         {isOpenModal === true ?
            <WalletModal
               wallet_amount={current_wallet.amount}
               onSubmit={changeWallet_check}
               toClose={toCloseModal}
               isDeposit={isDeposit}
               coin={{
                  coin_label: current_wallet.coin.symbol,
                  coinId: current_wallet.coin.coinId,
                  coin_price: current_wallet.analytics.price.currency_coin
               }}
               currcency={{
                  curr_label: curr_label,
                  curr_value: curr_value,
               }}
            />
            :
            <></>
         }
      </MainLayuot>
   )
}

export default observer(Mobile)