import React from 'react'
// import billImg from '../../utils/bill.png'
import billsImg from '../../utils/bills.png'
import invoiceImg from '../../utils/invoice.png'
import newbillImg from '../../utils/newBill.png'
import svg1 from '../../utils/undraw_receipt_re_fre3.svg'
// import svg2 from '../../utils/undraw_online_payments_re_y8f2.svg'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import { NavBar } from '../navbar/NavBar'


export const MainPage = () => {
  return (
    <section className='h-screen'>
        <NavBar/>
        <main className='sm:text-lg md:text-2xl h-fit p-4 mt-20 bg-slate-900 bg-b font-serifs text-white flex md:flex-row sm:flex-col-reverse'>
            <div className='w-1/2 sm:w-full flex flex-col justify-center content-center'>
            <h1 className='py-1 sm:text-xl md:text-3xl '>Welcome to <span className='text-indigo-600 sm:text-4xl md:text-7xl'>BillZoo.com</span></h1>
            <p>BillZoo provide free in-voice for your business which helps in providing bills easy and smart way.
                With BillZoo you can easily monitor the product sales and manage your products upto-date.
                 Access the endless possibility of your business with smart dashboards to improve your business.
                 join us today to grow togather.
            </p>
            <button className='bg-rose-600 hover:bg-slate-500 w-fit my-3 p-2 mx-auto rounded-md'>Demo Video</button>
            </div>
            <div className='w-1/2 flex flex-col sm:mx-auto justify-center content-center'>
            <img className='h-2/3' src={svg1} alt='bill'/>
            </div>
        </main>
        <main className='md:h-80 bg-gray-200 font-serif flex flex-col justify-around md:flex-row'>
            <div className='bg-indigo-500 md:w-1/4 p-2 m-2 rounded-md'>
            <img className='w-full h-5/6 rounded-md mx-auto' src={billsImg} alt='bill'/>
            <h1 className='text-center text-lg pt-2'>Bills</h1>
            </div>
            <div className='bg-indigo-500 md:w-1/4 p-2 m-2 rounded-md'>
            <img className='w-full  h-5/6 rounded-md mx-auto' src={invoiceImg} alt='bill'/>
            <h1 className='text-center text-lg pt-2'>Invoice</h1>
            </div>
            <div className='bg-indigo-500 md:w-1/4 p-2 m-2 rounded-md'>
            <img className='w-full h-5/6 rounded-md mx-auto' src={newbillImg} alt='bill'/>
            <h1 className='text-center text-lg pt-2'>NewBill</h1>
            </div>
        </main>
        <footer className='bg-slate-900 text-white sm:text-lg text-xl p-4  flex flex-col'>
                <div className='flex justify-center'>
                    <a className='hover:text-gray-400 px-1 text-2xl' href='/'><BsFacebook/></a>
                    <a className='hover:text-gray-400 px-1 text-2xl' href='/'><AiFillInstagram/></a>
                    <a className='hover:text-gray-400 px-1 text-2xl' href='/'><AiFillTwitterCircle/></a>
                </div>
                <div className='flex justify-center'>
                    <a className='hover:text-gray-400 px-1' href='/'>info</a>
                    <a className='hover:text-gray-400 px-1' href='/'>support</a>
                    <a className='hover:text-gray-400 px-1' href='/'>marketing</a>
                </div>
                <div className='flex justify-center'>
                    <a className='hover:text-gray-400 px-1' href='/'>terms & conditions</a>
                    <a className='hover:text-gray-400 px-1' href='/'>privacy policy</a>
                </div>
                <div className='text-center'>
                    <p>©2022 All rights reserved - BillZoo.com</p>
                </div>
        </footer>
    </section>
  )
}
