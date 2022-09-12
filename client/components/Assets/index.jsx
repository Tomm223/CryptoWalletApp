import { FetchWallet } from '../../http/fetch'
import { Box_s, Box_s_Header, Box_s_Title } from '../styledComponents/boxes'
import { ButtonMore } from '../UI/Boxes'
import styles from './index.module.scss'
export default function Assets() {

   return (
      <div className={styles.block}>
         <div className={styles.header}>
            <h3 className={styles.header__title}>Assets</h3>
            <ButtonMore />
         </div>
         <div className={styles.chart}></div>
      </div>
   )
}

