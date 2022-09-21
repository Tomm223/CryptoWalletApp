import { FetchWallet } from '../../http/fetch'
import { DonutChart, DonutsColors } from '../charts/assets'
import { Box_s, Box_s_Header, Box_s_Title } from '../styledComponents/boxes'
import { ButtonMore } from '../UI/Boxes'
import DonutChartLoader from '../UI/loaders/donut_chart'
import styles from './index.module.scss'


export default function Assets({ data, isLoading }) {

   return (
      <div className={styles.block}>
         <div className={styles.header}>
            <h3 className={styles.header__title}>Assets</h3>
            <ButtonMore />
         </div>
         <div className={styles.chart}>
            {
               isLoading ?
                  <DonutChartLoader />
                  :
                  data.length ?
                     <DonutChart
                        data={data}
                        height={150}
                        width={250}
                        innerRadius={50}
                     />
                     : <div>You don`t have wallets</div>
            }
         </div>
         <div className={styles.chart_info}>
            <ul className={styles.chart_info__list}>
               {data.map((item, index) => {
                  return (
                     <div key={item + index} className={styles.chart_info__item}>
                        <div style={{ backgroundColor: DonutsColors[index] }} className={styles.chart_info__color}></div>
                        <p className={styles.chart_info__name}>{item.name}</p>
                     </div>
                  )
               })}
            </ul>
         </div>
      </div>
   )
}





