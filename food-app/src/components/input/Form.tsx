
// import Input from '@mui/joy/Input';
import React, { useState, ChangeEvent } from 'react';

interface FormProps {
  inputName: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void

}
const Form: React.FC<FormProps> = ({ inputName, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);


  return (
    <div className='pt-1.5 w-full h-full'>
      <label className="pl-1.5 text-xl font-poppins">{inputName}</label>


      <div className='flex justify-between items-center '>
        <input
          placeholder={isFocused ? '' : inputName}
          className=' p-3 m-1 drop-shadow-lg w-full h-12 rounded-md font-poppins  placeholder:text-c4-gray  placeholder:font-poppins focus:pl-4 focus:font-poppins'
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        ></input>

        <div>

        </div>

      </div>



    </div>
  )
}

export default Form