import MainLayout from '@/components/layout/MainLayuot';
import Wallet from './Wallet';
import styles from './index.module.scss';
import Markets from '@/components/shared/dashboard/Markets'
import History from '@/components/shared/dashboard/History'
import Assets from '@/components/shared/dashboard/Assets'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useMemo } from 'react';
import { SocketContext, StoreContext } from '@/pages/_app'
import DashboardChart from './chart'
import DashboardConvert from './convert';

function Dashboard() {

   const { history, user, dashboard, wallet } = useContext(StoreContext)
   const { socket, socketConnected } = useContext(SocketContext)
   // wallet history market
   useEffect(() => {
      if (!socket || !socketConnected) return
      if (!dashboard.market.list.length) {
         socket.emit('dashboard_market', {
            page: dashboard.market._page,
            limit: dashboard.market._limit,
            currency: user.currency.value
         })
      }
   }, [socketConnected]);
   //
   const assetsData = useMemo(() => {
      if (wallet.totalWallet.total > 0) {
         return wallet.list.map((item) => {
            return {
               name: item.coin.symbol,
               value: item.analytics.price.currency_amount
            }
         })
      }
      else {
         return []
      }
   }, [wallet.totalWallet])

   return (
      <MainLayout>
         <main className={`${styles.main} main`}>
            <div className={styles.block}>
               <div className={styles.wallet}>
                  <div className={styles.wallet__list}>
                     <Wallet
                        isloading={wallet.isloading}
                        list={wallet.list}
                        loader={wallet.loader}
                        totalWallet={wallet.totalWallet}
                        userCurrency={user.currency.label}
                        isAuth={user.isAuth}
                     />
                  </div>
                  <div className={styles.wallet__gradient}></div>
               </div>
               <div className={styles.chart}>
                  <DashboardChart />
               </div>
               <div className={styles.markets}>
                  {dashboard.market.list ?
                     <Markets
                        list={dashboard.market.list}
                        currency={user.currency.label}
                     /> :
                     <>LOADING...</>
                  }
               </div>
               <div className={styles.chart_cyrcle}>
                  <Assets
                     isLoading={wallet.isloading}
                     data={assetsData}
                     loader={wallet.loader}
                     isAuth={user.isAuth}
                  />
               </div>
               <div className={styles.convert}>
                  <DashboardConvert />
               </div>
               <div className={styles.history}>
                  <History
                     history={history.list}
                     loader={wallet.loader}
                     isAuth={user.isAuth}
                  />
               </div>
            </div>

         </main>
      </MainLayout>

   )
}

export default observer(Dashboard)

