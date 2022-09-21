import ContentLoader from "react-content-loader"

export function WalletCardLoader({ ...props }) {

   return (
      <ContentLoader
         speed={2}
         width={360}
         height={171}
         viewBox="0 0 360 171"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
         {...props}
      >
         <rect x="0" y="0" rx="15" ry="15" width="360" height="171" />
      </ContentLoader>
   )
}
