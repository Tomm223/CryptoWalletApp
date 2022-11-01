import MainLayout from "@/components/layout/MainLayuot"
import styles from './index.module.scss'
import CurrentWallet from "./CurrentWallet"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { fixedNum, floor } from "@/utils/num"
import { useState } from "react"
import { useEffect } from "react"
import Spinner from "@/components/UI/loaders/Spinner"
import Assets from "./Assets"
import ProfiledWallet from "./Wallets"
import { StoreContext } from "@/pages/_app"
import { useMediaQuery } from 'react-responsive'
import Mobile from "./mobile"

function Profile() {
   const { wallet, user } = useContext(StoreContext)
   const [balance, setBalance] = useState({
      total: floor(wallet.totalWallet.total),
      percentage: fixedNum(wallet.totalWallet.percentage),
      profit: fixedNum(wallet.totalWallet.profit)
   })
   useEffect(() => {
      setBalance({
         total: floor(wallet.totalWallet.total),
         percentage: fixedNum(wallet.totalWallet.percentage),
         profit: fixedNum(wallet.totalWallet.profit)
      })
   }, [wallet.totalWallet])

   const [current_wallet, setCurrent_wallet] = useState(null)
   useEffect(() => {
      if (wallet.list.length) {
         if (current_wallet) {
            const new_curr_wallet = wallet.list.find(i => i._date_start === current_wallet._date_start && i.coin.coinId === current_wallet.coin.coinId)
            setCurrent_wallet(new_curr_wallet)
            return
         }
         setCurrent_wallet(wallet.list[0])
      }
   }, [wallet.list])

   // responsive
   const isMobile = useMediaQuery({ query: '(max-width:900px' })
   const [clientOnly, setClientOnly] = useState(false)
   useEffect(() => {
      setClientOnly(true)
   }, [])
   if (isMobile && clientOnly) {
      return (
         <Mobile
            userCurr={{
               curr_label: user.currency.label,
               curr_value: user.currency.value
            }}
            wallets={wallet.list}
            total={wallet.totalWallet}
            isLoading={wallet.isloading}
            loader={wallet.loader}
         />
      )
   }

   return (

      <MainLayout>
         <div className={styles.main}>
            <div className={styles.wallets}>
               <ProfiledWallet
                  wallet={wallet}
                  walletActive={current_wallet}
                  setWalletActive={setCurrent_wallet}
                  userCurrency={user.currency.label}
               />
            </div>
            <div className={styles.wallet}>
               {
                  !wallet.loader && wallet.list.length && current_wallet ?
                     <CurrentWallet toDefaultWallet={() => setCurrent_wallet(wallet.list[0])} isLoading={wallet.isloading} wallet={current_wallet} />
                     :
                     !wallet.loader && !wallet.list.length ?
                        <div className={styles.curr_not}>You don't have wallets</div>
                        :
                        <div className="spinner_center__display">
                           <Spinner />
                        </div>
               }
            </div>
            <Assets
               balance={wallet.totalWallet}
               list={wallet.list}
               userCurrency={user.currency.label}
               isLoading={wallet.isloading}
            />
         </div>
      </MainLayout>

   )
}

export default observer(Profile)

