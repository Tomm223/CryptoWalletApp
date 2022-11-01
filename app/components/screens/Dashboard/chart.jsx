import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import ChartBig from "../../shared/dashboard/ChartBig"
import { NextApi } from "../../../service/fetch"
import { SocketContext, StoreContext } from "@/pages/_app"
import { getUnix } from "@/utils/date"
import { tabsBigChart } from "@/components/shared/charts"

function DashboardChart() {
   const { user, dashboard } = useContext(StoreContext)
   const { socket, socketConnected } = useContext(SocketContext)
   //selects
   const [currencyList, setCurrencyList] = useState([])
   const [coinsList, setCoinsList] = useState([])

   //fetch func
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
   // first fetch
   useEffect(() => {
      if (!socket || !socketConnected) return
      if (!dashboard.chart.tabs_params.length || !dashboard.chart.currency
         || !currencyList.length || !coinsList.length) return
      console.log(dashboard.chart.tabs_params, dashboard.chart.currency);
      fetchNewChart()
      dashboard.setChartIsLoading(true)
   }, [socketConnected, dashboard.chart.tabs_params, dashboard.chart.currency, currencyList, coinsList])

   // values default
   const getOpts = async () => {
      const list = await NextApi.getCurrencyOptions()
      const coins = await NextApi.getCoinsOptions()
      const tabs = await tabsBigChart()
      setCurrencyList(list)
      setCoinsList(coins)
      dashboard.setChartTabsParams(tabs)
   }
   useEffect(() => {
      // selects opt
      getOpts()
      // default values
      dashboard.setChartCurrency(user.currency.value)
      dashboard.setChartCoiId('bitcoin')
   }, [])


   return (

      <ChartBig
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
   )
}

export default observer(DashboardChart)