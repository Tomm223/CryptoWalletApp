import { useRouter } from 'next/router'
import styles from './index.module.scss'

export default function BlockList({ label, link, children }) {
   const router = useRouter()
   const toPage = (e) => {
      e.preventDefault()
      if (link.lenght) {
         router.push(link)
      }
   }

   return (
      <div className={`${styles.block}  box s `}>
         <div className={styles.head}>
            <h1 className={styles.head__label}>{label}</h1>
            {
               link ?
                  <a onClick={toPage} className={styles.head__link} href='#'>View All</a>
                  :
                  <div></div>
            }
         </div>
         <div className={styles.main}>
            <ul className={styles.list}>
               {children}
            </ul>
         </div>
      </div >
   )
}

