import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import { useContext } from "react"
import { StoreContext } from "../pages/_app"
import cookie from 'js-cookie'

export function AuthContainer(gssp) {
   //const { user, main } = useContext(StoreContext)
   //const router = useRouter()
   return async (context) => {
      const { req, res } = context
      const token = req.cookies.token;
      console.log('token', token);
      if (!token) {
         //main.openLogin()
         //router.push('/')

         return {
            redirect: {
               destination: '/'
            }
         };

      }

      //const gsspData = await gssp(context); // Run `getServerSideProps` to get page-specific data

      // Pass page-specific props along with user data from `withAuth` to component

      return await gssp(context);
      /*return {
         props: {
            ...gsspData.props,
            data
         }
      };*/
   }
}



export default AuthContainer