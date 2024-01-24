import React, { useState } from 'react'

interface SignUpProps {
    label: string,
    onInputChange: (value: string) => void,
    errormsg?: string
}
const SignUpForm: React.FC<SignUpProps> = ({ label, onInputChange, errormsg }) => {

    const [isFocused, setIsFocused] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        onInputChange(event.target.value)
    }
    return (

        <div className='pt-1.5 w-full h-full'>
            <label className="pl-1.5 text-xl font-poppins">{label}</label>
            <label className="pl-1.5 text-sm font-poppins text-rose-600">{errormsg}</label>
            <div className='flex justify-between items-center '>
                <input
                    placeholder={isFocused ? '' : label}
                    className=' p-3 m-1 drop-shadow-lg w-full h-12 rounded-md font-poppins  placeholder:text-c4-gray  placeholder:font-poppins focus:pl-4 focus:font-poppins'
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}

                ></input>
                <div>
                </div>
            </div>
        </div>

    )
}

export default SignUpForm