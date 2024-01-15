import React, { ReactNode } from 'react'
import { CiSquareMore } from 'react-icons/ci';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { IoPricetagsOutline } from 'react-icons/io5';
import { SlHeart } from "react-icons/sl";
interface squareType {
    title: string,
    children?: ReactNode;
}
const SquareButton: React.FC<squareType> = ({ title, children }) => {

    return (
        <div className='flex flex-col justify-center'>
            <button className='w-16 h-16 bg-white rounded-md drop-shadow-sm flex items-center justify-center hover:drop-shadow-lg'

            >
                {children}

            </button>
            <span className='text-center pt-2'>{title}</span>
        </div>


    )
}

export default SquareButton