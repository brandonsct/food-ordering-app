
// import Input from '@mui/joy/Input';
import React, { useState, ChangeEvent } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
interface FormProps {

    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Password: React.FC<FormProps> = ({ onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    // const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(true)

    const handleToggle = () => {
        setVisible(!visible)
    }
    return (
        <div className='pt-1.5 w-full h-full'>
            <label className="pl-1.5 text-xl font-poppins">Password</label>
            <div className=" flex">
                <input
                    type={visible ? 'text' : 'password'}
                    name="password"
                    placeholder={isFocused ? '' : 'Password'}
                    className='p-3 m-1 drop-shadow-lg w-full h-12 rounded-md font-poppins  placeholder:text-c4-gray  placeholder:font-poppins focus:pl-4 focus:font-poppins'
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    autoComplete="current-password"
                />

                <span className="flex justify-around items-center " onClick={handleToggle}>
                    <Icon className="absolute mr-12 p-2 text-xs " icon={visible ? eye : eyeOff} size={25} />
                </span>
            </div>



        </div>
    )
}

export default Password