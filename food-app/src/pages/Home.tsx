
import { useEffect, useState } from "react";
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
import BottomNav from "../components/home/BottomNav";
const Home = () => {
    const [detailButton, setDetailButton] = useState(false)
    const [notification, setNotification] = useState(false)
    const navigate = useNavigate();

    const [showPopup, setShowPopup] = useState([false, false, false]);
    const handleClick = (id: string) => {
        setShowPopup(prevShowPopup => ({ ...prevShowPopup, [id]: !prevShowPopup[id] }));
    };
    const [menuItems, setMenuItems] = useState<string[]>([]);
    useEffect(() => {
        // Fetch menu items from the backend
        // This is just a placeholder, replace it with your actual fetch logic
        // fetch('/api/menu-items')
        //     .then(response => response.json())
        //     .then(data => setMenuItems(data));
        let data = ['chicken-masala', 'chicken-masala', 'chicken-masala']
        setMenuItems(data)
    }, []);




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

            <section className="pb-4 bottom-0">
                <div className="flex flex-row pl-3.5 pt-6 justify-between items-end pr-3.5 ">
                    <span className="text-2xl ">Today's promo</span>
                    <button className="text-red-400"> See all</button>
                </div>
                <div id="scroll-menu" className="pt-4 flex flex-row overflow-x-auto ">
                    {menuItems.map((menuItem) => (
                        <div key={menuItem.id}>
                            <FoodMenu imageUrl={menuItem.imageUrl} onClick={() => handleClick(menuItem.id)} />

                            {showPopup[menuItem.id] && (
                                <div>
                                    {/* Your popup menu code here */}
                                </div>
                            )}
                        </div>
                    ))}
                    {/* <FoodMenu imageUrl="chicken-masala" />
                    <FoodMenu imageUrl="chicken-masala" />
                    <FoodMenu imageUrl="chicken-masala" /> */}


                </div>
            </section>

            <BottomNav />

        </div >
    )
}

export default Home