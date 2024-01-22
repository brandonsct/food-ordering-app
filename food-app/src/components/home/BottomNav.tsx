
import { BiHomeAlt2 } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { TfiShoppingCartFull } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'

const BottomNav = () => {
    const navigate = useNavigate()
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black rounded-2xl ">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto ">
                <button type="button" onClick={() => navigate('/')} className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-orange-600 active:text-white group dark:hover:rounded-l-2xl " >
                    <BiHomeAlt2 className="text-orange-400" />
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-orange-600  " >
                    <TfiShoppingCartFull className="text-orange-400 " />
                </button>
                <button type="button" onClick={() => navigate('/search')} className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-orange-600 group">

                    <FaMagnifyingGlass className="text-orange-400" />
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-orange-600 group  dark:hover:rounded-r-2xl">

                    <CgProfile className="text-orange-400" />
                </button>

            </div>
        </div>
    )
}

export default BottomNav