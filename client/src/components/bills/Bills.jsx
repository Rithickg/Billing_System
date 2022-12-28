import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Bill} from '../bill/Bill'



export const Bills = ({bills}) => {
  const navigate =useNavigate()
  return (
        <div className='bg-gray-900 h-full'>
        <button onClick={()=>navigate('/content')} className='bg-rose-500 w-fit p-2 mt-2 ml-2 rounded-md'>Back</button>
        <h1 className='text-white text-center text-2xl font-serif p-5'>BILLS</h1>
        <div className='bg-gray-900 flex flex-row flex-wrap justify-center'>
        {bills.map((b)=>(<Bill bill={b}/>))}
        </div>
        </div>
  )
}
