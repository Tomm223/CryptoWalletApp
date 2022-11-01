import styles from './index.module.scss'
import { useState } from "react";
import { Button_Blue } from "../../../UI/form/buttons";
import InputConvert from "../../../UI/form/inputs/InputCurrency";
import Modal from "../../../UI/Modal";
import _ from 'lodash';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { fixedCoinNum } from '../../../../utils/num';
import treu from '@/assets/images/treu.png'
import arrows from "@/assets/images/change-arrows.png"
import Image from 'next/image';
import close from "@/assets/images/close.png"

export default function WalletModal({
   toClose,
   onSubmit,
   isDeposit,
   wallet_amount,
   currcency: { curr_label, curr_value },
   coin: { coin_label, coinId, coin_price }
}) {
   const [deposit, setDeposit] = useState(isDeposit)
   const [CoinCount, setCoinCount] = useState(1)
   const [YourCount, setYourCount] = useState(100)
   const [error, setError] = useState('')
   const inputs = useMemo(() => {
      console.log('Change');
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
      if (deposit) {
         return [you, coin]
      }
      else {
         return [coin, you]
      }

   }, [CoinCount, YourCount, deposit])

   useEffect(() => {
      //  start calc
      if (isDeposit) {
         toCalc(YourCount)
      }
      else {
         toCalcMoney(CoinCount)
      }
   }, [isDeposit])

   const setCoinCountFunc = (value) => {
      setCoinCount(value)
      toCalcMoney(value)
   }
   const setYourCountFunc = (value) => {
      setYourCount(value)
      toCalc(value)
   }

   const rotateInputs = () => {
      if (!inputs.length) return
      setDeposit(!deposit)
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
      if (!deposit && fixedCoinNum(wallet_amount) < fixedCoinNum(CoinCount)) {
         setError(`you can not withdraw more than ${wallet_amount} ${coin_label}`)
         return
      }
      if (error.length) {
         setError('')
      }

      onSubmit({
         isDeposit: deposit,
         currency: {
            value: curr_value,
            symbol: curr_label,
            amount: YourCount
         },
         coin: {
            value: coinId,
            symbol: coin_label,
            amount: CoinCount
         }
      })
   }


   return (
      <Modal toClose={toClose} >
         <div className={styles.block}>
            <div className={styles.block__aside}>
               <h3>Trade to <span className={styles.block__aside_blue}>{deposit ? 'Deposit' : 'Withdraw'}</span></h3>
               <div onClick={toClose} className={styles.block__aside__close}>
                  <Image src={close} alt="" />
               </div>
            </div>
            <form onSubmit={hundle} className={styles.form}>
               <div className={styles.form__arrow}>
                  <div className={styles.form__form}>
                     {inputs?.map((item, index) => {
                        const isLine = index < inputs.length - 1 ? true : false
                        return (
                           <>
                              <div className={styles.item}>
                                 <InputConvert  {...item} />
                              </div>
                              <div className={styles.item}>
                                 {isLine ?
                                    <div onClick={rotateInputs} className={styles.change}>
                                       <Image src={arrows} alt="" />
                                    </div>
                                    : <></>
                                 }
                              </div>
                           </>
                        )
                     })}
                     {error.length ? <div className={styles.error}>{error}</div> : <></>}
                  </div>
                  <div className={styles.btn}>
                     <Button_Blue >
                        Exchange
                     </Button_Blue>
                  </div>
                  <div className={styles.arrow}>
                     <div className={styles.arrow__arrow_start}></div>
                     <div className={styles.arrow__main}></div>
                     <div className={styles.arrow__arrow}></div>
                     <div className={styles.arrow__arrow_end}>
                        <Image src={treu} alt="" />
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </Modal>
   )
}

