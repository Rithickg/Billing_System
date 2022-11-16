import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {RiBillLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Button } from './Button'
import { useSelector } from 'react-redux'

export const NavBar = () => {
    const [open,setOpen]=useState(false);
    const isLoggedin = useSelector((state)=>state.auth.isLoggedin)
    console.log(isLoggedin)

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-serif text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-1 '>
                    <RiBillLine/>
                </span>
                BillZoo.com
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                { open ? <AiOutlineClose/> : <GiHamburgerMenu/> }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
              transition-all duration-500 ease-in ${open? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="/" className='text-gray-800 hover:text-gray-400 duration-500'>HOME</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="/bills" className='text-gray-800 hover:text-gray-400 duration-500'>BILLS</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="/enterbill" className='text-gray-800 hover:text-gray-400 duration-500'>NEWBILL</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="/login" className='text-gray-800 hover:text-gray-400 duration-500'>LOGIN</Link>
                    </li>
                    
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link to="/register" className='text-gray-800 hover:text-gray-400 duration-500'>REGISTER</Link>
                    </li>
                <Button>
                       <Link to="/content" >Get Started</Link>
                </Button>
            </ul>
        </div>
    </div>
  )
}
