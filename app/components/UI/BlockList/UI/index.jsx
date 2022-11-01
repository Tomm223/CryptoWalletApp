import { BorderNumberLoader, TextLoader } from '../../loaders/text'
import styles from './index.module.scss'
import Image from 'next/image'
import Green from '@/assets/images/side-green.svg'
import Red from '@/assets/images/side-red.svg'

export function DownUp({ status }) {

   return (
      <div className={styles.downup}>
         {
            status ? <Green /> : <Red />
         }
      </div>
   )
}

export function Percent({ children, isLoading }) {
   const perc = children || 0
   if (isLoading) {
      return <BorderNumberLoader />

   }

   else if (children < 0) {
      return (
         <div className={styles.percent_red}>
            <p className={styles.percent__item}>{perc}%</p>
         </div>
      )
   }
   return (
      <div className={styles.percent_green}>
         <p className={styles.percent__item}>+{perc}%</p>
      </div>
   )
}
export const StatusConditions = {
   done: 'done',
   pending: 'pending',
   error: 'error'
}
export function Status({ status }) {
   const clas = status === StatusConditions.done ? styles.status_green : status === StatusConditions.pending ? styles.status_orange : styles.status_red
   return (

      <div className={clas}> <p className={styles.status__item}>{status}</p></div>

   )
}

export function CountCoin({ children, currancy, isLoading }) {
   const count = children || 0

   if (isLoading) {
      return <TextLoader>12434544534543</TextLoader>

   }

   else if (children < 0) {
      return (
         <p className={styles.red}>{count} <span>{currancy}</span></p>
      )
   }
   return (
      <p className={styles.green}>+{count} <span>{currancy}</span></p>
   )
}

export function Profit({ count, currancy, isLoading }) {
   const profit = count || 0

   if (isLoading) {
      return <TextLoader>12434544534543</TextLoader>

   }

   else if (count < 0) {

      return (
         <div className={styles.red}>
            <p> {profit}</p> <span>{currancy}</span>
         </div>
      )
   }
   return (
      <div className={styles.green}>
         <p>+{profit}</p> <span>{currancy}</span>
      </div>
   )
}

export function Total({ amount, currancy, isLoading }) {
   const total = amount || 0

   if (isLoading) {
      return <TextLoader>12434544534543</TextLoader>

   }

   return (
      <div className={styles.total}>
         <p className={styles.total__item}>{total}</p>
         <p className={styles.total__item}>{currancy}</p>
      </div>
   )
}

/**return (
         <p className={styles.red}>{count} {currancy}</p>
      ) */