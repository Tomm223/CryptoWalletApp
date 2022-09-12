import styles from './index.module.scss'
import MainLayout from '../../components/MainLayuot'
import { ReactSelectNoSSR, SelectColors } from '../../components/UI/Select/index'
import { useMemo } from 'react'
import { InputChange, InputForm } from '../../components/UI/Forms/inputs'
import { Button_Blue } from '../../components/UI/Forms/buttons'
export default function setting() {
   const currency = {
      "aed": 78594,
      "ars": 2910434,
      "aud": 31127,
      "bch": 181.698,
      "bdt": 2036157,
      "bhd": 8060.86,
      "bmd": 21397,
      "bnb": 72.386,
      "brl": 110572,
      "btc": 1,
      "cad": 27792,
      "chf": 20511,
      "clp": 19904023,
      "cny": 145866,
      "czk": 524807,
      "dkk": 158463,
      "dot": 2903,
      "eos": 14791,
      "eth": 13.294122,
      "eur": 21318,
      "gbp": 18087.91,
      "hkd": 167879,
      "huf": 8614237,
      "idr": 318290405,
      "ils": 70166,
      "inr": 1710015,
      "jpy": 2929274,
      "krw": 28583529,
      "kwd": 6579.09,
      "lkr": 7715155,
      "ltc": 388.946,
      "mmk": 45005020,
      "mxn": 431787,
      "myr": 95784,
      "ngn": 9124151,
      "nok": 209918,
      "nzd": 34654,
      "php": 1197168,
      "pkr": 4621590,
      "pln": 101248,
      "rub": 1273128,
      "sar": 80362,
      "sek": 226565,
      "sgd": 29768,
      "thb": 763662,
      "try": 387478,
      "twd": 644384,
      "uah": 787272,
      "usd": 21397,
      "vef": 2142.49,
      "vnd": 500906086,
      "xag": 1122.77,
      "xau": 12.25,
      "xdr": 15751.52,
      "xlm": 194730,
      "xrp": 62200,
      "yfi": 2.474177,
      "zar": 364102,
      "bits": 999282,
      "link": 3044,
      "sats": 99928162
   }
   const options = useMemo(() => {
      const keys = Object.keys(currency)
      const newArr = []
      keys.map((elem, i) => {
         newArr.push({ value: elem, label: elem.toUpperCase() })
      })
      return newArr
   })
   const user = {
      name: 'Daniil',
      lastName: 'Osipov',
      email: 'dan.osipov99@mail.ru'
   }
   const mySelectCurr = {
      value: '', label: ''
   }



   return (
      <MainLayout>
         <main className={`${styles.block} main`}>
            <div className={styles.block__head}>
               <div className={styles.block__img}>
                  <img src="/icon/avatar.png" alt="" />
               </div>
            </div>
            <div className={styles.block__main}>
               <form className={styles.form}>
                  <div className={styles.form__left}>
                     <div className={styles.form__item}>
                        <div className={styles.form__select}>
                           <p>Currency:</p>
                           <ReactSelectNoSSR options={options} />
                        </div>
                     </div>
                  </div>
                  <div className={styles.form__right}>
                     <div className={styles.form__item}>
                        <InputChange onSubmit={() => { }} defaultValue={'Daniil'} />
                     </div>
                     <div className={styles.form__item}>
                        <InputChange defaultValue={'Osipov'} />
                     </div>
                     <div className={styles.form__item}>
                        <InputChange defaultValue={'dan.osipov99@mail.ru'} />
                     </div>
                  </div>

               </form>
            </div>
         </main>
      </MainLayout>
   )
}
