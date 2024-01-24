import React from 'react'
import BottomNav from '../components/home/BottomNav'

const Profile = () => {
    return (
        <div className='bg-[#E84C4F] h-screen w-screen relative'>
            <div className='absolute bg-white w-screen h-1/2 bottom-0 rounded-t-2xl flex flex-col justify-center items-center'>

                {/* <div className='bg-gray-300 rounded-full w-24 h-24 mt-[64px] top-0 absolute'></div>
                 */}
                <div className='top-0 absolute items-center flex flex-col justify-center'>
                    <div className='bg-gray-300 rounded-full w-24 h-24 mt-[64px] '></div>

                    <div className='mt-[12px] '>Brandon So</div>
                    <div className='mt-[12px] text-left w-[284px]'>Ordered Time:</div>
                    <div className='mt-[12px] text-left w-[284px]'>Average Calories:</div>
                    <div className='mt-[12px] text-left w-[284px]'>Credit Earned:</div>


                </div>
                <BottomNav />
            </div>
        </div>
    )
}

export default Profile