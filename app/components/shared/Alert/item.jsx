import styles from './index.module.scss'
import Image from 'next/image'
import error from '@/assets/images/error-30.png'

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
            <div className={styles.error__img}>
               <Image src={error} alt="" />
            </div>
            <p>{children}</p>
         </div>
      </div>
   )
}

