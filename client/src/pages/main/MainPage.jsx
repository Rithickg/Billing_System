import React from 'react'
import './mainpage.css'
import bill from '../../utils/bill.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'



export const MainPage = () => {
  return (
    <section className='mainPage'>
        <nav className='navbar'>
            <div className='left'>
                <h1>BillZoo.com</h1>
            </div>
            <div className='right'>
                <a href='/'>SignIn</a>
                <a href='/'>SignUp</a>
            </div>
        </nav>
        <main>
            <div className='main'>
            <h1>Welcome to <span className='name'>BillZoo.com</span></h1>
            <img src={bill} alt='ie'/>
            <p>BillZoo provide free in-voice for your business which helps in providing bills easy and smart way.
                With BillZoo you can easily monitor the product sales and manage your products upto-date.
                 Access the endless possibility of your business with smart dashboards to improve your business.
                 join us today to grow togather .
            </p>
            <button className='demo'>Demo Video</button>
            </div>
        </main>
        <footer>
            <div className='footer'>
                <div className='row1'>
                    <a className='rowspace' href='/'><BsFacebook/></a>
                    <a className='rowspace' href='/'><AiFillInstagram/></a>
                    <a className='rowspace' href='/'><AiFillTwitterCircle/></a>
                </div>
                <div className='row2'>
                    <a className='rowspace' href='/'>info</a>
                    <a className='rowspace' href='/'>support</a>
                    <a className='rowspace' href='/'>marketing</a>
                </div>
                <div className='row3'>
                    <a className='rowspace' href='/'>terms & conditions</a>
                    <a className='rowspace' href='/'>privacy policy</a>
                </div>
                <div className='row4 '>
                    <p >©2022 All rights reserved - BillZoo.com</p>
                </div>
            </div>
        </footer>
    </section>
  )
}
