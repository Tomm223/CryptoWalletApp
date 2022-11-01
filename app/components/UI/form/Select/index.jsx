
import dynamic from 'next/dynamic'

export const ReactSelectNoSSR = dynamic(() => import('./select'), {
   loading: () => <p>Загрузка...</p>,
   ssr: false
});

export const SelectColors = {
   black: 'select_black',
   brown: 'select_brown',
   blue: 'select_blue',
   green: 'select_green',
}

