import React from 'react'
import OptionItem from '../components/OptionItem'

const HomePage = () => {
  return (

    // the page selector card
    <div className='w-full md:w-[370px] mx-auto bg-white md:shadow-custom-all-sides md:rounded-md font-montserrat font-[400]'>
        <div className='px-4 py-6 pt-2'>
            {/* All pages checkbox */}
            <OptionItem name="All pages" />

            {/* line separator */}
            <div className='h-0.5 my-2 border-t-2'></div>

            {/* specific pages */}
            <div className='flex flex-col'>
                <OptionItem name="Page 3" />
                <OptionItem name="Page 4" />
                <OptionItem name="Page 5" />
                <OptionItem name="Page 6" />
            </div>

            {/* line separator */}
            <div className='h-0.5 my-2 border-t-2'></div>

            {/* Done button */}
            <button className='mt-4 w-full bg-yellow-400 py-3 rounded-md hover:bg-opacity-75 active:translate-y-0.25'>Done</button>
        </div>
    </div>
  )
}

export default HomePage