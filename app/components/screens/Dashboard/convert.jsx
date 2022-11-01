import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import ConvertConstuct from "../../shared/dashboard/Convert"
import { FetchWallet, NextApi } from "@/service/fetch"
import { SocketContext, StoreContext } from "@/pages/_app"

function DashboardConvert() {
   const { user, dashboard } = useContext(StoreContext)

   async function fetchCoinPrice(coinId, currency) {
      const { target } = await FetchWallet.convertCrypto(coinId, currency)
      return target
   }
   //default select list
   const [currencyList, setCurrencyList] = useState([])
   const [coinsList, setCoinsList] = useState([])
   const getCurrOpt = async () => {
      const list = await NextApi.getCurrencyOptions()
      const coins = await NextApi.getCoinsOptions()
      setCurrencyList(list)
      setCoinsList(coins)
   }
   useEffect(() => {
      getCurrOpt() // получаем selectOption
   }, [])

   return (
      <>

         <ConvertConstuct
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
               setCurrency: (value) => dashboard.setConvertCurrency(value),
               currencyList
            }}
            coinIdState={{
               coinId: dashboard.convert.coinId,
               setCoinId: (value) => dashboard.setConvertCoinId(value),
               coinsList
            }}
         />

      </>
   )
}

export default observer(DashboardConvert)