import styles from './index.module.scss'

export function AlertTemplate({ children }) {

   return (
      <div className={styles.message}>
         <div style={{ display: 'flex' }}>
            <p>{children}</p>
         </div>
      </div>
   )
}

export function ErrorTemplate({ children }) {

   return (
      <div className={styles.error}>
         <div className={styles.error__block}>
            <img src="/icon/error-30.png" alt="" />
            <p>{children}</p>
         </div>
      </div>
   )
}

