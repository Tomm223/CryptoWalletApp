import styles from './index.module.scss'
import { useRouter } from 'next/router'
export default function NavBtn({ children, link, ...args }) {
   const routing = useRouter()
   const hundle = (e) => {
      e.preventDefault()
      if (link) {
         routing.push(link)
      }
   }
   return (
      <div {...args} className={styles.link}>
         <a onClick={hundle} href='#' className={styles.a}>
            {children}
         </a>
      </div>
   )
}