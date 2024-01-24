import { useEffect, useState } from "react";

interface SmallCardProps {
    imageUrl: string
}
const SmallCard: React.FC<SmallCardProps> = ({ imageUrl }) => {
    const [bgImage, setBgImage] = useState('')
    useEffect(() => {
        import(`../../assets/${imageUrl}.jpg`)
            .then(image => {
                setBgImage(image.default);
            });

    }, [imageUrl]);
    return (
        <div className='w-[100px] h-[136px] bg-slate-500 flex justify-center pt-[7px] rounded-[15px] m-2 flex-shrink-0 '>
            <div className="flex flex-col">

                <div className='bg-blue-400 ml-[8px] mr-[8px]  h-[84px] rounded-[15px]'
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover', // or 'contain'
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }} ></div>
                <div className="text-center">Chicken Masala</div>
            </div>
        </div >
    )
}

export default SmallCard