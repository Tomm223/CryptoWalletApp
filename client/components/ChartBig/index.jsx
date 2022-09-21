import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { SocketContext } from '../../pages/_app';
import { BigChartNoSSR, tabsBigChart } from '../charts';
import Tabs from '../Tabs';
import { ReactSelectNoSSR } from '../UI/Select';
import styles from './index.module.scss'

export const currencyArr = [
   "usd",
   "aed",
   "ars",
   "aud",
   "bdt",
   "bhd",
   "bmd",
   "brl",
   "cad",
   "chf",
   "clp",
   "cny",
   "czk",
   "dkk",
   "eur",
   "gbp",
   "hkd",
   "huf",
   "idr",
   "ils",
   "inr",
   "jpy",
   "krw",
   "kwd",
   "lkr",
   "mmk",
   "mxn",
   "myr",
   "ngn",
   "nok",
   "nzd",
   "php",
   "pkr",
   "pln",
   "rub",
   "sar",
   "sek",
   "sgd",
   "thb",
   "try",
   "twd",
   "uah",
   "vef",
   "vnd",
   "zar",
   "xdr",
   "xag",
   "xau",
   "bits",
   "sats"
]

export default function ChartBig({
   defaultCurrency,
   defaultCoinId,
   currencyOption,
   coinsOption,
   chartData,
   fetchNewChartData,
   isLoadingState: { isLoading, setIsLoading },
   TabsParamState: { tabsList, setTabsList },
   currencyState: { currency, setCurrency },
   coinIdState: { coinId, setCoinId }
}) {
   const { socket, socketConnected } = useContext(SocketContext)
   const [goodRequest, setGoodRequest] = useState(false)

   // начальные значения selects
   useEffect(() => {
      if (defaultCurrency && currencyOption.length) {
         if (currency) return
         const tabs = tabsBigChart()
         setCurrency(defaultCurrency)
         setCoinId(defaultCoinId)
         setTabsList(tabs)
         setGoodRequest(true)
      }

   }, [defaultCurrency, currencyOption])
   // начальный график 
   useEffect(() => {
      if (!socket || !socketConnected) return
      if (!goodRequest) return //  потом как только эти переменные не пустые делать запрос
      fetchNewChartData()
      setIsLoading(true)
      setGoodRequest(false)
   }, [socketConnected, goodRequest])
   // обработка loading
   useEffect(() => {
      if (chartData.length) {
         setIsLoading(false)
      }
   }, [chartData])
   // получание нового графика на изменения парпметров 
   // запросы на изменения графика
   useEffect(() => {
      if (chartData.length && socket && currency) {
         fetchNewChartData()
         setIsLoading(true)
      }
   }, [currency, coinId, tabsList])

   return (
      <div className={styles.block}>
         <div className={styles.head}>
            <div className={styles.head__selects}>
               <div className={styles.head__select}>
                  <ReactSelectNoSSR
                     value={currencyOption.filter((i) => i.value === currency)}
                     onChange={(e) => { if (!isLoading) setCurrency(e.value) }}
                     placeholder={'currency'}
                     options={currencyOption} />
               </div>
               <div className={styles.head__select}>
                  <ReactSelectNoSSR
                     value={coinsOption.filter(i => i.value === coinId)}
                     onChange={(e) => { if (!isLoading) setCoinId(e.value) }}
                     placeholder='coin'
                     options={coinsOption}
                  />
               </div>
               <div className={styles.head__select}>
                  <Tabs
                     isLoading={isLoading}
                     list={tabsList}
                     setList={(list) => { if (!isLoading) console.log(isLoading); setTabsList(list) }} />
               </div>
            </div>
         </div>
         <div className={styles.chart}>
            <BigChartNoSSR data={chartData} width={800} height={300} />
         </div >
      </div >
   )
}

