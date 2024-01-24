import { ClassNames } from '@emotion/react'
import React from 'react'
import { SlArrowLeft } from 'react-icons/sl'

const Favourite = () => {
    return (
        <div className='h-screen w-screen'>


            <section className='grid grid-cols-3 gap-4 bg-red-400 w-full h-14'>
                <div className="left-0 pt-7 pl-3.5">
                    <button>
                        <SlArrowLeft />
                    </button>
                </div>
                <div className='text-center pt-7 text-xl'> Search</div>
            </section>


            <section></section>
            <section></section>





        </div>
    )
}

export default Favourite