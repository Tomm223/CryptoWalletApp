import styles from './index.module.scss'
import { useState } from "react";
import { Button_Blue } from "../../../UI/form/buttons";
import InputConvert from "../../../UI/form/inputs/InputCurrency";
import Modal from "../../../UI/Modal";
import _ from 'lodash';
import { useMemo } from 'react';
import { useEffect } from 'react';
import close from "@/assets/images/close.png"
import Image from 'next/image';

export default function CreateWalletModal({
   toClose,
   onSubmit,
   currcency: { curr_label, curr_value },
   coin: { coin_label, coinId, coin_price }
}) {

   const [CoinCount, setCoinCount] = useState(1)
   const [YourCount, setYourCount] = useState(100)
   const [error, setError] = useState('')
   const inputs = useMemo(() => {
      const you = {
         key: 'you',
         placeholder: 'Your money',
         inputValue: YourCount,
         selectValue: curr_value,
         selectDisabled: true,
         list: [{ value: curr_value, label: curr_label }],
         setSelectValue: (value) => console.log(value),
         setInputValue: (value) => setYourCountFunc(value)
      }
      const coin = {
         key: 'coins',
         placeholder: 'Coins count',
         inputValue: CoinCount,
         selectValue: coinId,
         // isTarget: true,
         selectDisabled: true,
         list: [{ value: coinId, label: coin_label }],
         setSelectValue: (value) => console.log(value),
         setInputValue: (value) => setCoinCountFunc(value)
      }
      return [you, coin]

   }, [CoinCount, YourCount])

   useEffect(() => {
      //  start calc
      toCalc(YourCount)
   }, [])

   const setCoinCountFunc = (value) => {
      setCoinCount(value)
      toCalcMoney(value)
   }

   const setYourCountFunc = (value) => {
      setYourCount(value)
      toCalc(value)
   }

   const toCalc = _.debounce((input) => {
      const coinAmount = input / coin_price
      setCoinCount(coinAmount)
   }, 500)

   const toCalcMoney = _.debounce((input) => {
      const coinAmount = input * coin_price
      setYourCount(coinAmount)
   }, 500)

   const hundle = (e) => {
      e.preventDefault()
      onSubmit(CoinCount)
   }


   return (
      <Modal toClose={toClose} >
         <div className={styles.block}>
            <div className={styles.block__aside}>
               <h3>Trade to <span className={styles.block__aside_blue}>Deposit</span></h3>
               <div onClick={toClose} className={styles.block__aside__close}>
                  <Image src={close} alt="" />
               </div>
            </div>
            <form onSubmit={hundle} className={styles.form}>
               <div className={styles.form__arrow}>
                  <div className={styles.form__form}>
                     {inputs?.map((item) => {

                        return (
                           <div className={styles.item}>
                              <InputConvert  {...item} />
                           </div>
                        )
                     })}
                     {error.length ? <div className={styles.error}>{error}</div> : <></>}
                  </div>
                  <div className={styles.btn}>
                     <Button_Blue >
                        Buy
                     </Button_Blue>
                  </div>
                  <div className={styles.arrow}>
                     <div className={styles.arrow__arrow_start}></div>
                     <div className={styles.arrow__main}></div>
                     <div className={styles.arrow__arrow}></div>
                     <div className={styles.arrow__arrow_end}>
                        <img src="@/assets/images/treu.png" alt="" />
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </Modal>
   )
}