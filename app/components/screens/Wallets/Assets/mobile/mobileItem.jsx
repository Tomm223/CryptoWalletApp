import { ItemAssetsMobile as Item } from '@/assets/styledComponents/Items'
import { Percent, Profit, Total } from '@/components/UI/BlockList/UI'
import { Button_Green } from '@/components/UI/form/buttons'

export default () => {
   return (
      <>

         <Item>
            <div className={stylesMarket.name}>
               <img className={stylesMarket.name__img} src={item.coin.img} alt="" />
               <div className={stylesMarket.label}>
                  <span className={stylesMarket.label__name}>{item.coin.label}</span>
                  <span className={stylesMarket.label__symbol}>{item.coin.symbol}</span>
               </div>
            </div>
            <p className={stylesMarket.price}>
               <Total amount={$amount} currancy={item.coin.symbol} />
            </p>
            <Profit isLoading={isLoading} count={$profit} currancy={userCurrency} />
            <div>
               <Button_Green
                  onClick={() => { setIsDeposit(true); setIsModalOpen(true); setCurrent_wallet(item) }}
                  disabled={!item.analytics.price.currency_coin}
               >Change</Button_Green>
            </div>
         </Item>
      </>

   )
}