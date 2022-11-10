import React from 'react'
import billImg from '../../utils/bill.png'
import billsImg from '../../utils/bills.png'
import invoiceImg from '../../utils/invoice.png'
import newbillImg from '../../utils/newBill.png'
import svg1 from '../../utils/undraw_receipt_re_fre3.svg'
import svg2 from '../../utils/undraw_online_payments_re_y8f2.svg'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import { NavBar } from '../navbar/NavBar'


export const MainPage = () => {
  return (
    <section className='h-screen'>
        <NavBar/>
        <main className='text-2xl mt-24 bg-slate-900 md;4xl bg-b font-serifs text-white flex flex-row'>
            <div className=''>
            <h1>Welcome to <span>BillZoo.com</span></h1>
            <p>BillZoo provide free in-voice for your business which helps in providing bills easy and smart way.
                With BillZoo you can easily monitor the product sales and manage your products upto-date.
                 Access the endless possibility of your business with smart dashboards to improve your business.
                 join us today to grow togather.
            </p>
            <button className='bg-rose-600 hover:bg-slate-500 w-fit my-2 p-2 mx-auto rounded-md'>Demo Video</button>
            </div>
            <div className=''>
            <img className='' src={svg1} alt='bill'/>
            </div>
        </main>
        <main className='bg-white flex flex-col md:flex-row'>
            <div className='bg-slate-400 m-2 rounded-md'>
            <img className=' w-full h-2/3 mx-auto' src={billsImg} alt='bill'/>
            <h1>Bills</h1>
            </div>
            <div className='bg-slate-400 m-2 rounded-md'>
            <img className='w-full h-2/3 mx-auto' src={invoiceImg} alt='bill'/>
            <h1>Invoice</h1>
            </div>
            <div className='bg-slate-400 m-2 rounded-md'>
            <img className='w-full h-2/3 mx-auto' src={newbillImg} alt='bill'/>
            <h1>NewBill</h1>
            </div>
        </main>
        <footer className='bg-slate-900 text-white flex flex-col'>
                <div className='flex justify-center'>
                    <a href='/'><BsFacebook/></a>
                    <a href='/'><AiFillInstagram/></a>
                    <a href='/'><AiFillTwitterCircle/></a>
                </div>
                <div className='flex justify-center'>
                    <a href='/'>info</a>
                    <a href='/'>support</a>
                    <a href='/'>marketing</a>
                </div>
                <div className='flex justify-center'>
                    <a href='/'>terms & conditions</a>
                    <a href='/'>privacy policy</a>
                </div>
                <div>
                    <p >©2022 All rights reserved - BillZoo.com</p>
                </div>
        </footer>
    </section>
  )
}
