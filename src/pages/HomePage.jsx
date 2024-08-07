import React from 'react'
import OptionItem from '../components/OptionItem'

const HomePage = () => {
  return (
    <div className='w-[370px] mx-auto bg-white shadow-custom-all-sides rounded-md font-montserrat font-[400]'>
        <div className='px-4 py-6 pt-2'>
            <OptionItem name="All pages" />
            <div className='h-0.5 my-2 border-t-2'></div>
            <div className='flex flex-col'>
                <OptionItem name="Page 1" />
                <OptionItem name="Page 2" />
                <OptionItem name="Page 3" />
                <OptionItem name="Page 4" />
            </div>
            <div className='h-0.5 my-2 border-t-2'></div>
            <button className='mt-4 w-full bg-yellow-400 py-3 rounded-md hover:bg-opacity-75 active:translate-y-0.25'>Done</button>
        </div>
    </div>
  )
}

export default HomePage