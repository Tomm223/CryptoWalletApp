import styles from './index.module.scss'
import Plus from './plus2.svg'
export default function AddWallet() {

   return (
      <div className={`${styles.block} ${styles.border}`}>
         <div className={styles.border__block}>
            <Plus className={styles.border__svg} />
            <p className={styles.border__p}>New Wallet</p>
         </div>
      </div>
   )
}