import { useEffect, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"

interface FoodmenueHorizontalProps {
    imageUrl: string
}
const FoodmenueHorizontal: React.FC<FoodmenueHorizontalProps> = ({ imageUrl }) => {
    const [bgImage, setBgImage] = useState('')
    useEffect(() => {
        import(`../../assets/${imageUrl}.jpg`)
            .then(image => {
                setBgImage(image.default);

            });

    }, [imageUrl]);
    return (
        <div className='flex flex-row  w-[328px] h-[103px] bg-gray-300 p-2 m-2 rounded-[15px]'>
            <div className='w-[100px] h-[87px] bg-red-400 rounded-[15px] ' style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover', // or 'contain'
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}

            >
            </div>
            <div className='flex flex-col ml-[14px]'>
                <span>Chicken Masala</span>
                <div className="flex flex-row mt-[25px] items-center">
                    <div className='w-4 h-4 bg-black rounded-full '></div> <div className='ml-[7px]'>Brandon So</div>
                </div>
            </div>
            <div className="items-center flex justify-center">
                {/* <div className="w-[25px] h-[25px] bg-black left-[13px]  ml-[53px]">
                 */}
                <button className="w-[25px] h-[25px] bg-gray-500  ml-[43px] rounded flex justify-center items-center">
                    <FaArrowRightLong className="text-white" />
                </button>

            </div>

        </div >

    )
}

export default FoodmenueHorizontal