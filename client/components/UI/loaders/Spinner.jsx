import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner({ bool }) {
   const override = {}

   return (

      <ClipLoader color={'blue'} loading={bool} cssOverride={override} size={50} />
   )
}