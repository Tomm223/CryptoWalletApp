import PersonBar from './Person'
import AuthBtns from './AuthBtns'

export function AuthBar({ isAuth }) {

   if (isAuth) {
      return <PersonBar />
   }
   return (
      <AuthBtns />
   )
}