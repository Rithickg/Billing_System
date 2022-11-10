import React from 'react'

export const Button = (props) => {
  return (
    <div className='bg-indigo-600 w-fit text-white font-serif py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
        {props.children}
    </div>
  )
}
