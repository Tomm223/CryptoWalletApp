import styles from './index.module.scss'
import Image from 'next/image'
import more from '@/assets/images/person-more.png'

export default function ButtonMore({ onClick }) {
   function hundle(e) {
      e.preventDefault()
      onClick()
   }
   return (
      <button onClick={hundle} className={styles.more}>
         <div className={styles.img}>
            <Image src={more} alt="" />
         </div>
      </button>
   )
}