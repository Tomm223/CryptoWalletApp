import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '@/pages/_app'
import Burger from './Burger'
import Logo from '../Logo'
import Search from '../../shared/Search'
import PersonBar from './PersonBar/Person'
import AuthBtns from './PersonBar/AuthBtns'
function Header() {
   const { user, main } = useContext(StoreContext)

   // mobile
   const [isOpenMenu, setIsOpenMenu] = useState(false)
   return (
      <header className='navbar_top'>
         <div className='navbar_top__burger'>
            <Burger
               isOpen={isOpenMenu}
               setIsOpen={(value) => setIsOpenMenu(value)}
            />
         </div>
         <div className='search'>
            <Search
               onChange={() => { main.setChecker('Данной функции пока нет применения', () => { }) }}
            />
         </div>
         <div className="navbar_top__logo">
            <Logo />
         </div>
         <div className='person'>
            {user.isAuth ?
               <PersonBar
                  avatar={user.avatar_link}
                  email={user.email}
                  lastname={user.lastname}
                  name={user.username}
               />
               :
               <AuthBtns />
            }
         </div>
      </header>
   )
}

export default observer(Header)