import dynamic from 'next/dynamic'
import { getUnix } from '../../../utils/date';

export const BigChartNoSSR = dynamic(() => import('./bigchart'), {
   loading: () => <p>Загрузка...</p>,
   ssr: false
});

export const tabsBigChart = () => {
   const day = 86400;
   const unix = getUnix()
   const tabs = [
      { id: 1, title: '1h', isActive: false, order: 1, value: unix - day / 24 },
      { id: 2, title: '6h', isActive: false, order: 7, value: unix - day / 4 },
      { id: 3, title: '1d', isActive: false, order: 28, value: unix - day },
      { id: 4, title: '7d', isActive: false, order: 14, value: unix - day * 7 },
      { id: 5, title: '1m', isActive: true, order: 60, value: unix - day * 30 },
   ]
   return tabs
}

