import { AreaChart, YAxis, XAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts'
export default function BigChart({ customTooltip, data, args }) {
   return (
      <ResponsiveContainer {...args} >
         <AreaChart padding={0} data={data}>
            <defs>
               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
               </linearGradient>
               <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
               </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis domain={data.length ? [data[0][1], data[data.length - 1][1]] : null} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={customTooltip} />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
         </AreaChart>
      </ResponsiveContainer>

   )
}