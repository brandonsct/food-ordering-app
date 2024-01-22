import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
// import chickenMasala from '../../assets/chicken-masala.jpg';



type FoodMenuProps = {
    imageUrl: string
}
const FoodMenu: React.FC<FoodMenuProps> = ({ imageUrl }) => {
    const [favDish, setFavDish] = useState(false)
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {

        import( /* @vite-ignore */
            `../../assets/${imageUrl}`)
            .then(image => {
                setBgImage(image.default);
            });
        console.log("this is image", bgImage)
    }, [imageUrl]);

    return (
        <div className=' bg-cover bg-center h-80 w-72 rounded-xl ml-3.5' style={{ backgroundImage: `url(${bgImage})` }} >
            <div className='flex justify-end p-2 '>
                <button className='bg-white h-9 w-9 rounded-full flex justify-center items-center '
                    onClick={() => setFavDish(!favDish)}>
                    {favDish ? <FaHeart /> : <FaRegHeart />}

                </button>

            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-white w-64 h-auto mt-36 rounded-md ml-4 mr-4'>
                    <div className=' flex flex-col pt-4 pl-4 pb-4 pr-4'>
                        <span className=''>Chicken Masala</span>
                        <span className='text-sm text-gray-400'>Delicious curry chicken </span>
                        <div className='flex-row flex justify-between'>
                            <span><span className='text-xl'>18.500</span> &nbsp; &nbsp;
                                <span className='line-through'><span className='text-sm text-gray-400 '>22.500</span>
                                </span></span>

                            <button className='text-white bg-orange-400 rounded-md pr-2 pl-2 pt-1 pb-1 '>5 left</button>

                        </div>
                    </div>


                </div>
            </div>


        </div >
    )
}

export default FoodMenu