import { useState } from 'react';
import Select from 'react-select'
import { SelectColors } from './index'
export default function select({ value, setValue, options, onChange, colorPrefix = SelectColors.black, placeholder = 'Select...' }) {


   return (
      <>
         <Select
            value={value}
            classNamePrefix={colorPrefix}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
         />
      </>
   )
}