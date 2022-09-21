import { makeAutoObservable } from 'mobx'
import cookie from 'js-cookie'

class DashboardStore {
   market = {
      list: [],
      _page: 1,
      _limit: 50
   }
   chart = {
      chart_data: [],
      currency: null,
      coinId: 'bitcoin',
      tabs_params: [],
      isLoading: false
   }
   convert = {
      currency: null,
      coinId: 'bitcoin',
      currency_price: null,
      isLoading: false,
      input: 100
   }

   constructor() {
      makeAutoObservable(this);
   }

   setMarket(list) {
      this.market.list = list
      cookie.set('dashboard_market', JSON.stringify(list), { expires: 1 / 24 / 4 })

   }
   // big chart
   get getChartTabsActive() {
      return this.chart.tabs_params.find(i => i.isActive)
   }
   setChartTabsParams(newList) {
      this.chart.tabs_params = newList
   }
   setChartIsLoading(bool) {
      this.chart.isLoading = bool
   }
   setChartCurrency(currency) {
      this.chart.currency = currency

   }
   setChartCoiId(coinId) {
      this.chart.coinId = coinId
   }
   setChartDate(start, end) {
      this.chart.date.start = start
      this.chart.date.end = end
   }
   setChartData(data) {
      this.chart.chart_data = data
   }
   // convert
   setConvertCurrency(currency) {
      this.convert.currency = currency
   }
   setConvertCoinId(coinId) {
      this.convert.coinId = coinId
   }
   setConvertInput(num) {
      this.convert.input = num
   }
   setConvertPrice(num) {
      this.convert.currency_price = num
   }
   setConvertIsLoading(bool) {
      this.convert.isLoading = bool
   }



}

export default new DashboardStore()
