
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import SquareButton from "../components/home/SquareButton";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaArrowTrendUp, FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";
import { CiSquareMore } from "react-icons/ci";
import FoodMenu from "../components/home/FoodMenu";
import { BiHomeAlt2 } from "react-icons/bi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import NotificationBell from "../components/home/notificationBell"
const Home = () => {
    const [detailButton, setDetailButton] = useState(false)
    const [notification, setNotification] = useState(false)
    const navigate = useNavigate();
    return (
        <div className="flex flex-col w-full h-full ">

            <section className="flex flex-row justify-between  w-full pt-4 pl-4 pr-4 top-0">

                <div className="relative flex flex-row">
                    <div className="w-56 sm:w-56 md:w-96 sm:h-9 md:h-20 sm:text-lg md:text-2xl bg-red-200 rounded-2xl items-center flex justify-between ">
                        <span className="pl-4 " >Jl.kmkasmkxmas </span>
                        <button onClick={() => setDetailButton(!detailButton)} className="pr-4">
                            {detailButton ? <SlArrowDown className="w-4 h-4" /> : <SlArrowUp className="w-4 h-4" />}
                        </button>
                    </div>
                    {detailButton ?
                        <div className=" absolute right-0 sm:mt-8 md:mt-20">
                            <div className=" bg-red-100 w-auto h-4 mr-4">
                                <button onClick={() => navigate('/Login')}>Logout</button>
                            </div>
                        </div>
                        : <></>}

                </div>
                <NotificationBell notification={notification} setNotification={setNotification} />

            </section >



            <section>
                <div className="flex flex-col pl-4">
                    <span className="text-2xl pt-6">Hello, Yahya</span>
                    <span className="text-sm pt-2">What do you want to eat?</span>
                </div>
                <div className="flex flex-row justify-between pl-3 pr-3 pt-6">
                    <SquareButton title="Favorite"> <FaRegHeart /></SquareButton>
                    <SquareButton title="Cheap"><IoPricetagsOutline /></SquareButton>
                    <SquareButton title="Trend"><FaArrowTrendUp /></SquareButton>
                    <SquareButton title="More"><CiSquareMore /></SquareButton>
                </div >
            </section>

            <section>
                <div className="flex flex-row pl-3.5 pt-6 justify-between items-end pr-3.5 ">
                    <span className="text-2xl ">Today's promo</span>
                    <button className="text-red-400"> See all</button>
                </div>
                <div id="scroll-menu" className="pt-4 flex flex-row overflow-x-auto ">
                    <FoodMenu />
                    <FoodMenu />
                    <FoodMenu />
                    <div className="ml-4"></div>
                </div>

            </section>

            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black rounded-2xl ">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto ">
                    <button type="button" className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-orange-600 active:text-white group dark:hover:rounded-l-2xl " >
                        <BiHomeAlt2 className="text-orange-400" />

                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-orange-600  " >

                        <TfiShoppingCartFull className="text-orange-400 " />
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-orange-600 group">

                        <FaMagnifyingGlass className="text-orange-400" />
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-orange-600 group  dark:hover:rounded-r-2xl">

                        <CgProfile className="text-orange-400" />
                    </button>

                </div>
            </div>

        </div >
    )
}

export default Home