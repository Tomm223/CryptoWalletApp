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
   const { history, user, dashboard } = useContext(StoreContext)
   const { socket, socketConnected } = useContext(SocketContext)

   useEffect(function () {
      if (history.list.length) return
      history.fetch()
   }, [history.list]);

   useEffect(() => {
      if (socket || socketConnected) {
         socket.on('check_market', () => {
            socket.emit('check_market', {
               page: dashboard.market._page,
               limit: dashboard.market._limit,
               currency: user.currency.value
            })
         })
         socket.on('market', (list) => {
            dashboard.setMarket(list)
            console.log('pj');
            //  cookie.set('dashboard_market', JSON.stringify(list), { expires: 1 / 24 / 4 })
         })
      }
      if (dashboard.market.list.length) return
      const market_cookie = cookie.get('dashboard_market')
      if (market_cookie) {
         dashboard.setMarket(JSON.parse(market_cookie))
         return
      }
      if (socket || socketConnected) {
         socket.emit('market', {
            page: dashboard.market._page,
            limit: dashboard.market._limit,
            currency: user.currency.value
         })
      }
   }, [socketConnected]);



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
                  <Markets
                     list={dashboard.market.list}
                     currency={user.currency.label}
                  /> :
                  <>LOADING...</>
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