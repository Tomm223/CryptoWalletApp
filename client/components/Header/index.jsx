import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { StoreContext } from '../../pages/_app'
import Burger from '../Burger'
import Logo from '../Logo'
import PersonBar from '../PersonBar'
import AuthBtns from '../PersonBar/AuthBtns'
import Search from '../UI/Search'

function Header() {
   const { user } = useContext(StoreContext)
   return (
      <header className='navbar_top'>
         <div className='navbar_top__burger'>
            <Burger />
         </div>
         <div className='search'>
            <Search />
         </div>
         <div className="navbar_top__logo">
            <Logo />
         </div>
         <div className='person'>
            {user.isAuth ?
               <PersonBar /> :
               <AuthBtns />
            }
         </div>
      </header>
   )
}

export default observer(Header)