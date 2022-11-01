import { Sparklines, SparklinesLine } from "react-sparklines";

export default function SparkLine({ data, color = '#A294E1', ...args }) {
   return (
      <Sparklines {...args} data={data}>
         <SparklinesLine stroke-width={2} color={color} style={{ fill: 'none', width: '20px' }} />
      </Sparklines>
   )
}