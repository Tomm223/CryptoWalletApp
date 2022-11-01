import { observer } from "mobx-react-lite"
import cookie from 'js-cookie'
import { getUser } from "@/service/auth"
import jwtDecode from "jwt-decode"
import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { StoreContext } from "@/pages/_app"

const withAuth = (Component) => {

   const AuthenticatedComponent = () => {
      const router = useRouter();
      const { user, main } = useContext(StoreContext)
      useEffect(() => {
         if (!user.isAuth) {
            router.push('/')
            main.pushErrors('У вас нет доступа на это страницу, чтобы исправить это авторизуйтесь')
         }
      }, [user.isAuth]);

      return user.isAuth ? <Component /> : null; // Render whatever you want while the authentication occurs
   };

   return observer(AuthenticatedComponent);
};

export default withAuth