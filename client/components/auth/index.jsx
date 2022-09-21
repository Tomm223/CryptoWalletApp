import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import { useContext } from "react"
import { SocketContext, StoreContext } from "../../pages/_app"
import { singIn, singUp } from "../../utils.js/auth"
import Login from "./Login"
import Registration from "./Registration"

function AuthWindowContainer({ children }) {

   const { user, main } = useContext(StoreContext)
   const { socket, refetchSocket } = useContext(SocketContext)
   const router = useRouter()
   const toUnAuth = () => {

      if (router.pathname === '/') {
         router.back()
      }
   }
   const login = async (formBody) => {
      try {
         const userData = await singIn(formBody)
         if (typeof userData === 'string') {
            console.log(userData); // закинуть это в FORMIK_ERROR
         }
         else {
            user.setUser(userData)
            main.closeLogin()
            if (router.pathname === '/') {
               router.back()
            }
            refetchSocket()
         }
      }
      catch (e) {
         console.log('error', e);
      }
   }
   const registration = async (formBody) => {
      try {
         const userData = await singUp(formBody)
         if (typeof userData === 'string') {
            console.log(userData); // закинуть это в FORMIK_ERROR
         }
         else {
            user.setUser(userData)
            main.closeRegistration()
            if (router.pathname === '/') {
               router.back()
            }
            refetchSocket()
         }
      }
      catch (e) {
         console.log(e);
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