import styles from './index.module.scss'
import Image from 'next/image'
import img from '@/assets/images/logo.png'

function logo() {
   return (
      <div className={styles.block}>
         <Image src={img} />
      </div>
   )
}
export default logo