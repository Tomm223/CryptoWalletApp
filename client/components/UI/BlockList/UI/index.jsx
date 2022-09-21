import { BorderNumberLoader, TextLoader } from '../../loaders/text'
import styles from './index.module.scss'

export function DownUp({ status }) {
   const green = '/icon/side-green.svg'
   const red = '/icon/side-red.svg'
   return (
      <div className={styles.downup}>
         <img src={status ? green : red} alt="" />
      </div>
   )
}

export function Percent({ children, isLoading }) {

   if (isLoading) {
      return <BorderNumberLoader />

   }

   else if (children < 0) {
      return (
         <div className={styles.percent_red}>
            <p className={styles.percent__item}>{children}%</p>
         </div>
      )
   }
   return (
      <div className={styles.percent_green}>
         <p className={styles.percent__item}>+{children}%</p>
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

   if (isLoading) {
      return <TextLoader>12434544534543</TextLoader>

   }

   else if (children < 0) {
      return (
         <p className={styles.red}>{children} <span>{currancy}</span></p>
      )
   }
   return (
      <p className={styles.green}>+{children} <span>{currancy}</span></p>
   )
}

export function Profit({ count, currancy, isLoading }) {

   if (isLoading) {
      return <TextLoader>12434544534543</TextLoader>

   }

   else if (count < 0) {
      return (
         <div className={styles.red}>
            <p> {count}</p> <span>{currancy}</span>
         </div>
      )
   }
   return (
      <div className={styles.green}>
         <p>+{count}</p> <span>{currancy}</span>
      </div>
   )
}

export function Total({ amount, currancy, isLoading }) {

   if (isLoading) {
      return <TextLoader>12434544534543</TextLoader>

   }

   return (
      <div className={styles.total}>
         <p className={styles.total__item}>{amount}</p>
         <p className={styles.total__item}>{currancy}</p>
      </div>
   )
}

/**return (
         <p className={styles.red}>{count} {currancy}</p>
      ) */