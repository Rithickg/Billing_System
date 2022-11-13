import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {CiViewList} from  'react-icons/ci'
import { NavBar } from '../navbar/NavBar'

export const Content = () => {
  return (
    <div className=' bg-gray-900 font-serif w-full h-screen flex flex-col justify-center'>
      <NavBar/>
      <div className=' rounded-md  sm:text-2xl md:text-4xl lg:text-4xl mx-auto text-white flex flex-col w-fit' > 
         <Link to='/enterbill'>
           <div className='bg-indigo-400 hover:text-black p-3  m-2 hover:bg-indigo-200 rounded-md'>
           <AiOutlineAppstoreAdd className='mx-auto' />
             Create a new bill
            </div>
         </Link>
         <Link to='/bills'>
            <div className='bg-indigo-400 hover:text-black p-3 m-2 hover:bg-indigo-200 rounded-md'>
            <CiViewList className='mx-auto'/>
           View existing bills
           </div>
         </Link>
      </div>
    </div>
  )
}
