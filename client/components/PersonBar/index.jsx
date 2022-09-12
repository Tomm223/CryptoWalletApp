import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { FetchAuth } from '../../http/fetch'
import { StoreContext } from '../../pages/_app'
import { Button_Blue } from '../UI/Forms/buttons'
import { API_URL } from '../../http'
import styles from './index.module.scss'

function PersonBar() {

   const { user } = useContext(StoreContext)
   console.log(user);
   return (
      <div className={`${styles.block}  box s`}>
         <div className={styles.main}>
            <div className={styles.img}>
               <img src={API_URL + `/auth/img/${user.avatar_link}`} alt="" />
            </div>
            <div className={styles.name}>
               <p id={styles.name}>{user.username} {user.lastname}</p>
               <p id={styles.email}>{user.email}</p>
            </div>
         </div>
         <div className={styles.more}>
            <img src="/icon/person-more.png" alt="" />
         </div>
      </div>
   )
}

export default observer(PersonBar)