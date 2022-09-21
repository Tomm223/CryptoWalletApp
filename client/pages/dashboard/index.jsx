import ChartBig from '../../components/ChartBig';
import MainLayout from '../../components/MainLayuot';
import Wallet from '../../components/wallet/Wallet';
import styles from './index.module.scss';
import Markets from '../../components/Markets'
import Convert from '../../components/Convert'
import History from '../../components/History'
import Assets from '../../components/Assets'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useMemo, memo } from 'react';
import { SocketContext, StoreContext } from '../_app';
import cookie from 'js-cookie'
import { FetchWallet, NextApi } from '../../http/fetch'
import { getUnix } from '../../utils.js/date';
import { useState } from 'react';


function dashboard() {
   const { history, user, dashboard, wallet } = useContext(StoreContext)
   const { socket, socketConnected } = useContext(SocketContext)


   useEffect(function () {
      if (history.list.length) return
      history.fetch()
   }, [history.list]);

   useEffect(() => {
      if (socket || socketConnected) {
         const market_cookie = cookie.get('dashboard_market')
         if (market_cookie) {
            dashboard.setMarket(JSON.parse(market_cookie))
            return
         }
         socket.emit('dashboard_market', {
            page: dashboard.market._page,
            limit: dashboard.market._limit,
            currency: user.currency.value
         })
      }

   }, [socketConnected]);


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

   async function fetchCoinPrice(coinId, currency) {
      const { target } = await FetchWallet.convertCrypto(coinId, currency)
      return target
   }

   // chart
   useEffect(() => {
      alert('change')
   }, [dashboard.chart.currency])
   const [currencyList, setCurrencyList] = useState([])
   const [coinsList, setCoinsList] = useState([])
   const getOpts = async () => {
      const list = await NextApi.getCurrencyOptions()
      const coins = await NextApi.getCoinsOptions()
      setCurrencyList(list)
      setCoinsList(coins)
   }
   useEffect(() => {
      getOpts()
   }, [])

   const fetchNewChart = () => {
      const { value: dateStart, order } = dashboard.getChartTabsActive
      const unix = getUnix()
      socket.emit('dashboard_chart', {
         date: {
            start: dateStart,
            end: unix
         },
         order: order,
         coinId: dashboard.chart.coinId,
         currency: dashboard.chart.currency
      })
   }

   return (
      <MainLayout>
         <main className={`${styles.main} main`}>
            <div className={styles.wallet}>
               <Wallet />
            </div>
            <div className={styles.chart}>
               <ChartBig
                  userCurrency={user.currency.value}
                  coinsOption={coinsList}
                  currencyOption={currencyList}
                  fetchNewChartData={() => fetchNewChart()}
                  chartData={dashboard.chart.chart_data}
                  coinIdState={{
                     coinId: dashboard.chart.coinId,
                     setCoinId: (value) => dashboard.setChartCoiId(value)
                  }}
                  currencyState={{
                     currency: dashboard.chart.currency,
                     setCurrency: (value) => dashboard.setChartCurrency(value)
                  }}
                  TabsParamState={{
                     tabsList: dashboard.chart.tabs_params,
                     setTabsList: (newList) => dashboard.setChartTabsParams(newList)
                  }}
                  isLoadingState={{
                     isLoading: dashboard.chart.isLoading,
                     setIsLoading: (bool) => dashboard.setChartIsLoading(bool)
                  }}
               />
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
               <Assets isLoading={wallet.isloading} data={assetsData} />
            </div>
            <div className={styles.convert}>
               <Convert
                  defaultCurrency={user.currency.value}
                  defaultCoinId={'bitcoin'}
                  fetchCoinPrice={fetchCoinPrice}
                  inputState={{
                     input: dashboard.convert.input,
                     setInput: (num) => dashboard.setConvertInput(num)
                  }}
                  isLoadingState={{
                     isLoading: dashboard.convert.isLoading,
                     setIsLoading: (bool) => dashboard.setConvertIsLoading(bool)
                  }}
                  coinsPriceState={{
                     coin_price: dashboard.convert.currency_price,
                     setCoin_price: (value) => dashboard.setConvertPrice(value)
                  }}
                  currencyState={{
                     currency: dashboard.convert.currency,
                     setCurrency: (value) => dashboard.setConvertCurrency(value)
                  }}
                  coinIdState={{
                     coinId: dashboard.convert.coinId,
                     setCoinId: (value) => dashboard.setConvertCoinId(value)
                  }}
               />
            </div>
            <div className={styles.history}>
               <History history={history.list} />
            </div>
         </main>
      </MainLayout>

   )
}

export default observer(dashboard)