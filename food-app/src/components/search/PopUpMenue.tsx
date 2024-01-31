import React from 'react'
import { MdCancel } from "react-icons/md";
const popUpMenue = () => {
    return (
        <div className='w-[328px] h-[439px] bg-gray-300 rounded-[15px] fixed top-[50px]'>

            <button className='absolute'><MdCancel className='text-black w-[29px] h-[29px] ml-[9px] mt-[12px]' /></button>
            <div className='w-[175px] h-[175px] bg-red-300 rounded-[15px] ml-[76px] mt-[13px]'> </div>
            <div className='flex flex-col '>
                <p className='text-center'>Chicken Masala</p>
                <p className='text-center'>Brandon So </p>
                <p className='text-center'>Food Description: This dish is made with passion!</p>
                <p className='text-center'>Calories: xxx kcal, xxxKj</p>
                <p className='text-center'>CreditS: 20Creds</p>

            </div>







        </div>
    )
}

export default popUpMenue