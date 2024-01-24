

import { SlArrowLeft } from 'react-icons/sl'
import Searchbar from '../components/search/Searchbar'
import FoodmenueHorizontal from '../components/search/FoodmenueHorizontal'
import { useState } from 'react'
import BottomNav from '../components/home/BottomNav'
import FilterTag from '../components/search/FilterTag'
import SmallCard from '../components/search/SmallCard'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const [filter, setFilter] = useState(false)
    const [breakfastTag, setBreakfastTag] = useState(false)
    const [lunchTag, setLunchTag] = useState(false)
    const [dinnerTag, setDinnerTag] = useState(false)
    const navigate = useNavigate()


    return (
        <div className='h-screen w-screen'>
            <section className='grid grid-cols-3 gap-4  w-full h-14'>
                <div className="left-0 pt-7 pl-3.5">
                    <button onClick={() => navigate('/')}>
                        <SlArrowLeft className='text-red-600' />
                    </button>
                </div>
                <div className='text-center pt-7 text-2xl'> Search</div>
            </section>


            <section >
                <Searchbar setFilter={setFilter} filter={filter} />
            </section>
            {filter ? <div className='flex flex-row justify-around mt-2'>
                <FilterTag tagName='Breakfast' tagState={breakfastTag} stateToggle={setBreakfastTag} />
                <FilterTag tagName='Lunch' tagState={lunchTag} stateToggle={setLunchTag} />
                <FilterTag tagName='Dinner' tagState={dinnerTag} stateToggle={setDinnerTag} />



            </div> : <></>}
            {
                filter ?
                    <section className='w-screen h-auto flex flex-col justify-center items-center '>
                        <FoodmenueHorizontal imageUrl="chicken-masala" />
                        <FoodmenueHorizontal imageUrl="chicken-masala" />
                        <FoodmenueHorizontal imageUrl="chicken-masala" />
                    </section>

                    :
                    <div>
                        <div>
                            <div className='flex flex-row justify-between'>
                                <div className='ml-[23px]'>Most Frequent Order</div>
                                <div> See all</div>
                            </div>


                            <div className='w-screen flex-row flex  overflow-x-auto  ml-[23px]'>

                                <SmallCard imageUrl="chicken-masala" />
                                <SmallCard imageUrl="chicken-masala" />
                                <SmallCard imageUrl="chicken-masala" />
                                <SmallCard imageUrl="chicken-masala" />
                                <SmallCard imageUrl="chicken-masala" />
                            </div>

                        </div>
                        <div>
                            <div className='ml-[23px]'>Daily Suggestion</div>
                            <div className='w-screen  ml-[23px]'>
                                <FoodmenueHorizontal imageUrl="chicken-masala" />
                                <FoodmenueHorizontal imageUrl="chicken-masala" />
                            </div>
                        </div>

                    </div>




            }





            <BottomNav />

        </div>
    )
}

export default Search