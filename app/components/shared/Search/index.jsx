import styles from './index.module.scss'
import Svg from '@/assets/images/search.svg'


export default function Search({ onChange, placeholder = 'search...' }) {

   return (
      <div className={styles.block}>
         <input onChange={(e) => onChange(e.target.value)} className={styles.input} type="text" placeholder={placeholder} />
         <div className={styles.svg}>
            <Svg className={styles.svg__item} />
         </div>
      </div>
   )
}