import _ from 'lodash'
import { useEffect, useState, useMemo } from 'react'
import { NextApi } from '../../http/fetch'
import { currencyArr } from '../ChartBig'
import { Button_Blue } from '../UI/Forms/buttons'
import { InputConvert } from '../UI/Forms/inputs'
import styles from './index.module.scss'

export default function Convert({
   defaultCurrency,
   defaultCoinId,
   fetchCoinPrice,
   inputState: { input, setInput },
   isLoadingState: { isLoading, setIsLoading },
   coinsPriceState: { coin_price, setCoin_price },
   currencyState: { currency, setCurrency },
   coinIdState: { coinId, setCoinId },
}) {

   //const [inputValue, setInputValue] = useState(100)
   const [total, setTotal] = useState(0)
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
   // дефолтные 
   useEffect(() => {
      if (defaultCurrency) {
         if (currency) return
         // кладем валюту пользователя
         setCurrency(defaultCurrency)
         setCoinId(defaultCoinId)
      }
   }, [defaultCurrency])

   useEffect(() => {
      if (currency && coinId) {
         if (isLoading) return
         //получаем новый price coin
         console.log('change');
         refetchCoinPrice()
      }
   }, [currency, coinId])

   useEffect(() => {
      if (typeof coin_price === 'number') {
         // считаем под новый прайс 
         toCalc()
      }
   }, [coin_price])

   async function refetchCoinPrice() {
      // func get new price coin
      setIsLoading(true)
      const price = await fetchCoinPrice(coinId, currency)
      console.log('price', price);
      setCoin_price(price)
      setIsLoading(false)
   }

   function toCalc() {
      // func calc new total
      const result = input / coin_price
      setTotal(result)
   }


   return (
      <div className={`${styles.block} box s`}>
         <div className={styles.head}>
            <h3>Convert</h3>
            <button className={styles.more}>
               <img className={styles.img} src="/icon/person-more.png" alt="" />
            </button>
         </div>
         <form className={styles.form}>
            <div className={styles.form__mb}>
               <InputConvert
                  inputValue={input}
                  setInputValue={(e) => setInput(e)}
                  selectValue={currency}
                  setSelectValue={(value) => setCurrency(value)}
                  list={currencyList}
               />
            </div>
            <div className={styles.form__mb}>
               <InputConvert
                  isTarget={true}
                  inputValue={total}
                  selectValue={coinId}
                  setSelectValue={(value) => setCoinId(value)}
                  list={coinsList} />
            </div>
            <div className={styles.form__mb}>
               <Button_Blue
                  disabled={isLoading}
                  onClick={toCalc}
               >Convert Now</Button_Blue>
            </div>
            <div className={styles.form__support}>
               <p>The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.</p>
            </div>
         </form>
      </div>
   )
}




