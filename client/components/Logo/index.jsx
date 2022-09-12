import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { StoreContext } from '../../pages/_app'
import styles from './index.module.scss'

function logo() {
   const { main } = useContext(StoreContext)
   return (
      <div onClick={() => { main.pushAlert('Вы успешно покинули свой кошелек '); main.pushErrors('Вы успешно покинули свой кошелек ') }} className={styles.block}>
         <img src="icon/logo.png" alt="" />
      </div>
   )
}
export default observer(logo)