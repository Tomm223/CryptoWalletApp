import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import { useContext } from "react"
import { StoreContext } from "../../pages/_app"
import { singIn, singUp } from "../../utils.js/auth"
import Login from "./Login"
import Registration from "./Registration"

function AuthWindowContainer({ children }) {

   const { user, main } = useContext(StoreContext)
   const router = useRouter()
   const toUnAuth = () => {

      if (router.pathname === '/') {
         router.back()
      }
   }
   const login = async (formBody) => {
      const userData = await singIn(formBody)
      user.setUser(userData)
      main.closeLogin()
      if (router.pathname === '/') {
         router.back()
      }
   }
   const registration = async (formBody) => {
      const userData = await singUp(formBody)
      user.setUser(userData)
      main.closeRegistration()
      if (router.pathname === '/') {
         router.back()
      }
   }
   return (
      <>
         {children}
         {
            main.isOpenLogin ?
               <Login
                  isOpen={main.isOpenRegistration}
                  onSubmit={login}
                  linkSecondWindow={() => main.openRegistration()}
                  unAuth={toUnAuth}
               />
               :
               <div></div>
         }

         {main.isOpenRegistration ?
            <Registration
               isOpen={main.isOpenRegistration}
               onSubmit={registration}
               linkSecondWindow={() => main.openLogin()}
               unAuth={toUnAuth}
            />
            :
            <div></div>
         }
      </>
   )
}

export default observer(AuthWindowContainer)