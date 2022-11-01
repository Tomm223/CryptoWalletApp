import Transactions from "@/components/screens/Transactions"
import withAuth from "@/hoc/withAuth"

const transaction = () => {

   return (
      <Transactions />
   )
}

export default withAuth(transaction)

