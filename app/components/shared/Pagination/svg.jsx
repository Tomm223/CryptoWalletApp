import { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import nextPage from '@/assets/images/next_page.png'

export default function ({ isLeft, args }) {
   const [style, setStyle] = useState(isLeft ? styles.svg_left : styles.svg_right)
   return (
      <div {...args} className={style}>
         <Image src={nextPage} />
      </div>
   )
}