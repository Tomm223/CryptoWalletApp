import { Button_Blue } from '../UI/Forms/buttons'
import { InputConvert } from '../UI/Forms/inputs'
import styles from './index.module.scss'

export default function Convert() {
   const currency = [
      { value: 'usd', label: 'USD' },
      { value: 'rub', label: 'RUB' },
      { value: 'usd', label: 'USD' },
      { value: 'usd', label: 'USD' }
   ]
   const coins = [
      { value: 'bitcoin', label: 'BTC' },
      { value: 'ether', label: 'ETH' },
      { value: 'bitcoin', label: 'BTC' },
   ]

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
               <InputConvert isTarget={false} list={currency} />
            </div>
            <div className={styles.form__mb}>
               <InputConvert isTarget={true} list={coins} />
            </div>
            <div className={styles.form__mb}>
               <Button_Blue>Convert Now</Button_Blue>
            </div>
            <div className={styles.form__support}>
               <p>The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.</p>
            </div>
         </form>
      </div>
   )
}