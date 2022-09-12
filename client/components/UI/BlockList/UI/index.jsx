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

export function Percent({ children }) {
   if (children < 0) {
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

export function CountCoin({ children, currancy }) {

   if (children < 0) {
      return (
         <p className={styles.red}>{children} <span>{currancy}</span></p>
      )
   }
   return (
      <p className={styles.green}>+{children} <span>{currancy}</span></p>
   )
}

export function Profit({ count, currancy }) {

   if (count < 0) {
      return (
         <p className={styles.red}>{count} <span>{currancy}</span></p>
      )
   }
   return (
      <p className={styles.green}>+{count} <span>{currancy}</span></p>
   )
}

export function Total({ amount, currancy }) {
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