import { useEffect, useState } from 'react';
import { BigChartNoSSR, tabsBigChart } from '../../charts';
import Tabs from '../../Tabs';
import Spinner from '../../../UI/loaders/Spinner';
import { ReactSelectNoSSR } from '../../../UI/form/Select';
import styles from './index.module.scss'
import Tooltip from './Tooltip';


export default function ChartBig({
   currencyOption,
   coinsOption,
   chartData,
   fetchNewChartData,
   isLoadingState: { isLoading, setIsLoading },
   TabsParamState: { tabsList, setTabsList },
   currencyState: { currency, setCurrency },
   coinIdState: { coinId, setCoinId }
}) {
   // начальные значения selects
   useEffect(() => {
      if (currencyOption.length) {
         if (currency) return

         //setCurrency(defaultCurrency)
         //setCoinId(defaultCoinId)
         //setTabsList(tabs)
      }

   }, [, currencyOption])

   // обработка loading
   useEffect(() => {
      if (chartData.length) {
         setIsLoading(false)
      }
   }, [chartData])

   // получание нового графика на изменения парпметров 
   // запросы на изменения графика
   useEffect(() => {
      if (chartData.length && currency) {
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
                     setList={(list) => { setTabsList(list) }} />
               </div>
            </div>
         </div>
         <div className={styles.chart_container}>
            {
               chartData.length ?
                  <BigChartNoSSR
                     className={styles.chart_svg}
                     data={chartData}
                     customTooltip={
                        <Tooltip
                           currency={currency}
                           firstPrice={chartData.length ? chartData[0].uv : 0} />
                     }
                  />
                  :
                  <div className={styles.loader}>
                     <Spinner />
                  </div>
            }

         </div >
      </div >
   )
}

