import { useEffect, useState } from 'react'
import { Button_Blue } from '../../../UI/form/buttons'
import InputConvert from '../../../UI/form/inputs/InputCurrency'
import styles from './index.module.scss'
import img from "@/assets/images/person-more.png"
import Image from 'next/image'
import ButtonMore from '@/components/UI/form/inputs/InputMore'

export default function Convert({
   defaultCurrency,
   defaultCoinId,
   fetchCoinPrice,
   inputState: { input, setInput },
   isLoadingState: { isLoading, setIsLoading },
   coinsPriceState: { coin_price, setCoin_price },
   currencyState: { currency, setCurrency, currencyList },
   coinIdState: { coinId, setCoinId, coinsList },
}) {

   const [total, setTotal] = useState(0)

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
            <ButtonMore />
         </div>
         <form className={styles.form}>
            <div className={styles.form__mb_relative}>
               <div className={styles.form__mb_zIndex}>
                  <InputConvert
                     inputValue={input}
                     setInputValue={(e) => setInput(e)}
                     selectValue={currency}
                     setSelectValue={(value) => setCurrency(value)}
                     list={currencyList}
                  />
               </div>
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
                  onClick={(e) => { e.preventDefault(); toCalc() }}
               >Convert Now</Button_Blue>
            </div>
            <div className={styles.form__support}>
               <p>The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.</p>
            </div>
         </form>
      </div>
   )
}




