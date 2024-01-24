import React from 'react'


interface FilterTagProp {
    tagName: string;
    tagState: boolean;
    stateToggle: (value: boolean) => void;

}
const FilterTag: React.FC<FilterTagProp> = ({ tagName, tagState, stateToggle }) => {

    return (
        <button className='h-[42px] rounded-[20px] bg-blue-400 p-2 pl-[27px] pr-[27px] items-center' onClick={() => {
            stateToggle(!tagState);
            console.log("tag", tagName)
        }}>{tagName} </button>
    )
}

export default FilterTag