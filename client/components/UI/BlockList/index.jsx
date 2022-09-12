import styles from './index.module.scss'

export default function BlockList({ label, link, children }) {


   return (
      <div className={`${styles.block}  box m `}>
         <div className={styles.head}>
            <h1 className={styles.head__label}>{label}</h1>
            <a className={styles.head__link} href='#'>View All</a>
         </div>
         <div className={styles.main}>
            <ul className={styles.list}>
               {children}
            </ul>
         </div>
      </div >
   )
}

