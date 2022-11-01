import Wallets from "@/components/screens/Wallets"
import withAuth from "@/hoc/withAuth"


const wallets = () => {

   return (
      <Wallets />
   )
}

export default withAuth(wallets)