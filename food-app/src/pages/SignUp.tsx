import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/input/SignUpForm';


const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");

    const [usernameErr, setUsernameErr] = useState('')
    const [emailError, setEmailErr] = useState('')
    const [passwordError, setPasswordErr] = useState('')
    const [phoneNumberErr, setPhoneNumberErr] = useState("");






    const navigate = useNavigate();


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






    const handleRegister = () => {
        setUsernameErr('');
        setEmailErr('');
        setPasswordErr('');
        setPhoneNumberErr('');

        // Check if all fields are filled
        if (!username) setUsernameErr('Username is required');
        if (!email) setEmailErr('Email is required');
        if (!password) setPasswordErr('Password is required');
        if (!phoneNumber) setPhoneNumberErr('Phone number is required');
        // If all fields are filled, proceed with registration
        if (username && email && password && phoneNumber) {

            checkUserExistance(acExist => {
                if (acExist) {
                    setEmailErr('email already registered');
                    return
                }
                else {
                    let data = { "username": username, "email": email, "password": password, "phone": phoneNumber };
                    fetch("http://localhost:3080/register", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then((res) => res.json())
                        .then((data) => {
                            console.log("result:", data)
                        })
                }

            })






        }


    }



    return (
        <div className="font-poppins ">
            <div className='text-2xl text-center  relative pt-24 ' >Register</div>
            <div className='text-2xl text-center text-gray-400'>Create a new account</div>

            <div className='flex-col pl-7 pr-7 pt-6'>
                <SignUpForm label="Username" onInputChange={setUsername} />
                <SignUpForm label="email" onInputChange={setEmail} errormsg={emailError} />
                <SignUpForm label="phoneNumber" onInputChange={setPhoneNumber} />
                <SignUpForm label="password" onInputChange={setPassword} />
            </div>
            <span className="flex justify-around pt-7 text-white  ">
                <button className='bg-red-500 h-12 w-72 rounded-2xl drop-shadow-lg'
                    onClick={() => handleRegister()}
                >Register</button>
            </span>
            <div className=' pt-4 text-base text-center'

            >Already have an account? <a className='text-c4-gray' href='/Login' >Login</a></div>
        </div >
    )
}

export default SignUp