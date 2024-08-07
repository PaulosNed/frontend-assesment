import React from 'react'

const OptionItem = ({name}) => {
  return (
    <div className='flex justify-between items-end py-3 px-2'>
        <p>{name}</p>
        <div className='w-[23px] h-[23px] rounded-md border-2'></div>
    </div>
  )
}

export default OptionItem