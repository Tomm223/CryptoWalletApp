import { useMemo } from "react";
import * as d3 from "d3";


const MARGIN = 0;



export const DonutChart = ({ width, height, innerRadius, data }) => {
   const radius = Math.min(width, height) / 2 - MARGIN;

   const pie = useMemo(() => {
      const pieGenerator = d3.pie().value((d) => d.value);
      return pieGenerator(data);
   }, [data]);

   const arcs = useMemo(() => {
      const arcPathGenerator = d3.arc();
      return pie.map((p) =>
         arcPathGenerator({
            innerRadius,
            outerRadius: radius,
            startAngle: p.startAngle,
            endAngle: p.endAngle,
         })
      );
   }, [radius, pie]);

   return (
      <svg width={width} height={height} style={{ display: "inline-block" }}>
         <g width={width} height={height} transform={`translate(${width / 2}, ${height / 2})`}>
            {arcs.map((arc, i) => {
               return <path key={i} d={arc} fill={DonutsColors[i]} />;
            })}
         </g>
      </svg>
   );
};


export const DonutsColors = [
   "#00BFFF",
   "#7B68EE",
   "#000080",
   "#B0C4DE",
   "#4169E1",
   "#0000FF",
   "#87CEEB",
   "#AFEEEE",
   "#48D1CC",
   "#0000CD",
   "#40E0D0",
   "#1E90FF",
   "#7FFFD4",
   "#6495ED",
   "#ADD8E6",
   "#4682B4",
   "#00CED1",
   "#00008B",
   "#87CEFA",
   "#E0FFFF",
   "#00FFFF",
   "#00FFFF",
   "#B0E0E6",
   "#191970",
   "#5F9EA0"]