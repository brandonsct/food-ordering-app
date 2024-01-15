import React, { useState } from 'react'
import Form from '../components/input/Form'
import Password from '../components/input/Password'
import GoogleIcon from '../components/icons/GoogleIcon'
import Facebook from '../components/icons/Facebook'
import Xmedia from '../components/icons/Xmedia'
import { useNavigate } from 'react-router-dom'

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailErr] = useState('')
    const [passwordError, setPasswordErr] = useState('')
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(false);
    const [ispwFocused, setIspwFocused] = useState(false);
    // const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(true)


    const handleFormResult = () => {
        let data = { email, password }

        console.log("handleForm clicked", data)
        setEmailErr('')
        setPasswordErr('')

        // if ("" === email) {
        //     setEmailErr("Please enter your email")
        //     return
        // }
        // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        //     setEmailErr("Please enter a valid email")
        //     return
        // }
        // if ("" === password) {
        //     setPasswordErr("Please enter a password")
        //     return
        // }
        // if (password.length < 7) {
        //     setPasswordErr("The password must be 8 characters or longer")
        //     return
        // }
        checkUserExistance(acExist => {
            if (acExist) {
                Login()
            }
            else {
                if (window.confirm("user does not exist, Do You want to sign up?"))
                    navigate("/SignUp")
            }
        })


    }
    const Login = () => {

        fetch("http://localhost:3080/verify", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.accountExist) {
                    navigate('/')
                }
                else {
                    console.log("incorrect password")
                    setPasswordErr("incorrect password")
                }
            })
    }

    type checkUserCallback = (userExists: boolean) => void
    const checkUserExistance = (callback: checkUserCallback) => {
        fetch("http://localhost:3080/checkUserExistance", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((res) => res.json())
            .then((res) => {
                callback(res?.userExists)

            })

    }
    return (
        <div className="font-poppins ">

            <div className="text-2xl text-center relative pt-28 pb-20"> Eating at Suk</div>
            <div className='text-2xl text-center  relative pt-24 ' >Welcome</div>
            <div className='text-2xl text-center text-gray-400'>Login to your account</div>
            <div className='flex-col pl-7 pr-7 pt-6'>
                {/* <Form inputName="Email" onChange={event => setEmail(event.target.value)} /> */}
                <div className='pt-1.5 w-full h-full'>
                    <label className="pl-1.5 text-xl font-poppins">Email</label>
                    <div className='flex justify-between items-center '>
                        <input
                            placeholder={isFocused ? '' : "Email"}
                            className=' p-3 m-1 drop-shadow-lg w-full h-12 rounded-md font-poppins  placeholder:text-c4-gray  placeholder:font-poppins focus:pl-4 focus:font-poppins'
                            onChange={event => setEmail(event.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        ></input>
                        <div>
                        </div>
                    </div>
                </div>
                {/* <Password onChange={event => setPassword(event.target.value)} /> */}        <div className='pt-1.5 w-full h-full'>
                    <label className="pl-1.5 text-xl font-poppins">Password</label>

                    <label className="pl-1.5 text-sm font-poppins text-rose-600">{passwordError}</label>

                    <div className=" flex">
                        <input
                            type={visible ? 'text' : 'password'}
                            name="password"
                            placeholder={ispwFocused ? '' : 'Password'}
                            className='p-3 m-1 drop-shadow-lg w-full h-12 rounded-md font-poppins  placeholder:text-c4-gray  placeholder:font-poppins focus:pl-4 focus:font-poppins'
                            onChange={event => setPassword(event.target.value)}
                            onFocus={() => setIspwFocused(true)}
                            onBlur={() => setIspwFocused(false)}
                            autoComplete="current-password"
                        />
                        <span className="flex justify-around items-center " onClick={() => setVisible(!visible)}>
                            <Icon className="absolute mr-12 p-2 text-xs " icon={visible ? eye : eyeOff} size={25} />
                        </span>
                    </div>
                </div>
            </div>
            <span className="flex justify-end " >
                <span className=" text-red-400 pr-14" >Forgot Password?</span>
            </span>
            <span className="flex justify-around pt-7 text-white  ">
                <button className='bg-red-500 h-12 w-72 rounded-2xl drop-shadow-lg'
                    onClick={() => handleFormResult()}
                >Login</button>
            </span>
            <div className=' pt-4 text-base text-center'>Don't have account? <a className='text-c4-gray' href='/SignUp' >Create Now</a></div>
            <div className='flex items-center justify-center'>
                <div className='flex justify-around w-44 pt-10'>
                    <GoogleIcon />
                    <Facebook />
                    <Xmedia />
                </div>
            </div>





        </div >
    )
}

export default Login