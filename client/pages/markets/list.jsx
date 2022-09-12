import { Percent, Profit } from '../../components/UI/BlockList/UI'
import { Button_Green } from '../../components/UI/Forms/buttons'
import styles from './index.module.scss'
import { ItemMarketPage as Item } from '../../components/UI/BlockList/Items'
import { fixedNum } from '../../utils.js/num'



const List = ({ market }) => {

   return (
      <ul className={styles.list}>
         {market.sortSearch.map((item) => {
            let perc1h = fixedNum(item.price_change_percentage_1h_in_currency)
            let perc24h = fixedNum(item.price_change_percentage_24h_in_currency)
            let perc7d = fixedNum(item.price_change_percentage_7d_in_currency)
            let mkt24h = fixedNum(item.market_cap_change_percentage_24h)
            return (
               <Item key={item.id} >
                  <p className={styles.price}>#{item.market_cap_rank}</p>
                  <div className={styles.name}>
                     <img className={styles.name__img} src={item.image} alt="" />
                     <div className={styles.label}>
                        <span className={styles.label__name}>{item.name}</span>
                        <span className={styles.label__symbol}>{item.symbol}</span>
                     </div>
                  </div>
                  <div className={styles.btn}>
                     <Button_Green>Buy</Button_Green>
                  </div>
                  <p className={styles.price}>{item.current_price} {`user.currecy`}</p>
                  <div className={styles.percent}>
                     <Percent children={perc1h} ></Percent>
                  </div>
                  <div className={styles.percent}>
                     <Percent children={perc24h}></Percent>
                  </div>
                  <div className={styles.percent}>
                     <Percent children={perc7d}></Percent>
                  </div>
                  <p className={styles.price}>{item.market_cap}$</p>
                  <div className={styles.percent}>
                     <Percent children={mkt24h} />
                  </div>
                  <div className={styles.img_50}>
                     <img src={`https://www.coingecko.com/coins/${item.market_cap_rank}/sparkline`} alt="" />
                  </div>
               </Item>
            )
         })}
      </ul>
   )
}

export default List