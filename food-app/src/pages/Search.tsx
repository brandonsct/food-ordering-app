
import { CiSearch } from 'react-icons/ci'
import { SlArrowLeft } from 'react-icons/sl'
import Searchbar from '../components/search/Searchbar'
import FoodmenueHorizontal from '../components/search/FoodmenueHorizontal'
import { useState } from 'react'
import BottomNav from '../components/home/BottomNav'
import FilterTag from '../components/search/FilterTag'
import SmallCard from '../components/search/SmallCard'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const [filter, setFilter] = useState(true)
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
                    <div>
                        <div>
                            <div>Most Frequent Order</div>
                            <div className='w-screen flex-row flex  overflow-x-auto '>
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                            </div>

                        </div>
                        <div>
                            <div>Daily Suggestion</div>
                            <FoodmenueHorizontal />
                            <FoodmenueHorizontal />
                        </div>

                    </div> :


                    <section className='w-screen h-auto flex flex-col justify-center items-center '>
                        <FoodmenueHorizontal />
                        <FoodmenueHorizontal />
                        <FoodmenueHorizontal />


                    </section>

            }





            <BottomNav />

        </div>
    )
}

export default Search