import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import { useContext } from "react"
import { SocketContext, StoreContext } from "@/pages/_app"
import { singIn, singOut, singUp, updateUser, getUser } from "@/service/auth"
import { useEffect } from "react"
import cookie from 'js-cookie'
import jwt_decode from "jwt-decode";
import { createContext } from "react"
import wallet from "@/store/wallet"

export const AuthContext = createContext(null)

function AuthContainer({ children }) {

   const { user, main, history } = useContext(StoreContext)
   const { socket, socketConnected, refetchSocket } = useContext(SocketContext)
   const router = useRouter()

   function fetchUserData() {
      if (socketConnected) {
         socket.emit('wallet')
         history.fetch()
         return true
      }
      else {
         return false
      }
   }

   useEffect(() => {
      const getU = async () => {
         const token = cookie.get('token')
         try {
            if (token) {
               const userData = jwt_decode(token)
               if (userData.id) {
                  user.setIsLoading(true)
                  const User = await getUser(userData.id)
                  if (typeof User == 'string') {
                     main.pushErrors(User)
                     return
                  }
                  user.setUser(User)
               }
               else {
                  throw ''
               }
            }
            else {
               user.isAnonim()
               main.pushErrors(`Некоторые функции приложения могут не работать, войдите в аккаунт`)
            }
         }
         catch (e) {
            reFetchToken()
         }
      }
      getU()
   }, [])
   useEffect(() => {
      if (main.isOpenRegistration) {
         main.setChecker(`Для более быстрого доступа к функиям сайта можете авторизоватся 
         под моим аккаунтом, Если согласны нажмите продолжить`, async () => {
            const email = 'dan.osipov99@mail.ru'
            const password = 'Dancsgo1337'
            await login({ email, password })
            main.closeRegistration()
         })
      }
   }, [main.isOpenRegistration])

   const changeUser = async ({ username, lastname, email, avatar_link, currency, password = null }) => {
      try {
         const newUser = await updateUser({ username, lastname, email, avatar_link, currency, password })
         if (typeof newUser === 'string') {
            main.pushErrors(newUser)
         }
         else {
            user.setUser(newUser)
            main.pushAlert('Change status 200')
            fetchUserData()
         }
      }
      catch (e) {
         alert('err')
         console.log('error tue', e);

      }
   }
   const toUnAuth = () => {
      main.closeLogin()
      main.closeRegistration()
   }

   const reFetchToken = async () => {
      try {
         cookie.remove('token');
         const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true })
         cookie.set('token', response.data.token);
      } catch (e) {
         logout()
         main.pushErrors('Истекло время токена, авторизутесь для дальнейшей работы')
      }
   }

   const login = async (formBody) => {
      try {
         const userData = await singIn(formBody)
         if (typeof userData === 'string') {
            return userData
         }
         else {
            user.setUser(userData)
            main.closeLogin()
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
            return userData
         }
         else {
            user.setUser(userData)
            main.closeRegistration()
            refetchSocket()
         }
      }
      catch (e) {
         console.log(e);
      }

   }
   const logout = async () => {
      const message = await singOut()
      user.outUser()
      wallet.remove()
      history.remove()
      if (router.pathname === '/transactions' || router.pathname === '/profile' || router.pathname === '/setting') {
         router.push('/')
      }
      main.pushAlert(message)
      refetchSocket()
   }
   const logout_check = () => {
      main.setChecker('Are you sure you want to sign out of your account', logout)
   }

   return (
      <AuthContext.Provider value={{
         toUnAuth, login, registration, logout: logout_check, fetchUserData, changeUser, reFetchToken
      }}>
         {children}
      </AuthContext.Provider>
   )
}

export default observer(AuthContainer)

