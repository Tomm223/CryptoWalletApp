import ChartBig from '../../components/ChartBig';
import MainLayout from '../../components/MainLayuot';
import Wallet from '../../components/wallet/Wallet';
import styles from './index.module.scss';
import Markets from '../../components/Markets'
import Convert from '../../components/Convert'
import History from '../../components/History'
import Assets from '../../components/Assets'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react';
import { SocketContext, StoreContext } from '../_app';
import cookie from 'js-cookie'
function dashboard() {
   const { history, market } = useContext(StoreContext)
   useEffect(function () {
      if (history.list.length) return
      history.fetch()
   }, [history.list])

   const { socket, socketConnected } = useContext(SocketContext)
   const { dashboard, wallet } = useContext(StoreContext)

   useEffect(() => {
      if (!socket || !socketConnected) return;
      socket.emit('market', {
         page: dashboard.market._page,
         limit: dashboard.market._limit,
         currency: 'usd'
      })
   }, [socketConnected])
   /*useEffect(() => {
      const resp = async () => { await wallet.fetchWallets(); console.log(wallet.list); }
      resp()
   }, [])*/
   /*useEffect(() => {
      if (!wallet.list && wallet.totalWallet.total === 0) return
      if (walletCookie) return
      const walletCookie = cookie.get('wallet')

      const resp = async () => await wallet.totalWalletCorrecting()
      resp()
   }, [wallet.list])*/
   return (
      <MainLayout>
         <main className={`${styles.main} main`}>
            <div className={styles.wallet}>
               <Wallet />
            </div>
            <div className={styles.chart}>
               <ChartBig />
            </div>
            <div className={styles.markets}>
               {dashboard.market.list ?
                  <Markets list={dashboard.market.list} /> : <>LOADING...</>
               }
            </div>
            <div className={styles.chart_cyrcle}>
               <Assets />
            </div>
            <div className={styles.convert}>
               <Convert />
            </div>
            <div className={styles.history}>
               <History history={history.list} />
            </div>
         </main>
      </MainLayout>

   )
}

export default observer(dashboard)