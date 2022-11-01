import { ReactSelectNoSSR } from "@/components/UI/form/Select";


export default function Select({ onChange, options, value, name }) {


   return (
      <>
         <ReactSelectNoSSR
            name={name}
            value={options.filter(i => i.value === value)}
            options={options}
            onChange={(value) => onChange(value)}
         />
      </>
   )
}