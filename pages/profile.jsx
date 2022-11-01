import Setting from "@/components/screens/Setting"
import withAuth from "@/hoc/withAuth"

const Profile = () => {
   return (
      <Setting />
   )
}

export default withAuth(Profile)