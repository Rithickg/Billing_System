import React from 'react'
import {Bill} from '../bill/Bill'
import { Link } from 'react-router-dom'


export const Bills = ({bills}) => {
  return (
    <>
        <div className='bg-gray-900 w-full'>
        <h1 className='text-white text-center text-2xl font-serif p-5'>BILLS</h1>
        <div className=' flex flex-row flex-wrap justify-center'>
        <Link to='/enterbill'>enterBill</Link>
        {bills.map((b)=>(<Bill bill={b}/>))}
        </div>
        </div>
    </>
  )
}
