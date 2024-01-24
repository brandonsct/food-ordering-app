
import { useEffect, useRef } from 'react';
import { CiSearch } from 'react-icons/ci'
import { IoFilter } from 'react-icons/io5'

interface SearchbarProps {
    setFilter: (value: boolean) => void;
    filter: boolean
}



const Searchbar: React.FC<SearchbarProps> = ({ setFilter, filter }) => {

    // const ref = useRef<HTMLDivElement>(null);

    // useEffect(() => {

    //     function handleClickOutside(event: MouseEvent) {
    //         if (ref.current && !ref.current.contains(event.target as Node)) {
    //             setFilter(false);
    //         }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);
    return (
        <> {
            filter ?

                <div className='flex flex-row justify-around pt-[21px]'>
                    < div className='flex flex-row border-[2px] w-64 h-[52px] rounded-[15px] border-red-300'>
                        <button className=''  ><CiSearch className='text-4xl p-2' /></button>
                        <input className='pl-12 w-full h-full rounded-[15px]' type="text" placeholder="Search..." />

                    </div >

                </div >
                : <div className='flex flex-row justify-around pt-[21px]'>
                    < div className='flex flex-row border-[2px] w-64 h-[52px] rounded-[15px] border-red-300' >

                        {/* <button className='' onClick={() => setFilter(!filter)} ><CiSearch className='text-4xl p-2' /></button> */}
                        <button className=''  ><CiSearch className='text-4xl p-2' /></button>
                        <input className='pl-12 w-full h-full rounded-[15px]' type="text" placeholder="Search..." />

                    </div >


                    <button className='bg-gray-400 w-[52px] h-[52px] rounded-[15px] flex justify-center items-center' onClick={() => setFilter(true)}>
                        <IoFilter className='text-3xl' />
                    </button>
                </div >
        }</>




    )
}

export default Searchbar