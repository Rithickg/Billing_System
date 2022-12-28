import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../../redux/reducer/authSlice'
import { addUserData } from '../../redux/reducer/userSlice'
import { useNavigate } from 'react-router-dom'
// import { addUserData } from '../../redux/reducer/userSlice'


export const Login = () => {
    const navigate =useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch =useDispatch();
    let name ='jokar';
    const isLoggedin = useSelector((state)=>state.auth.isLoggedin)
    console.log(isLoggedin)
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
          const data =  await axios.post("https://web-production-aa15.up.railway.app/api/login",{
            email,password
           })
           console.log(data.data)
           const tokendata = data.data
           console.log(tokendata)
           dispatch(addUserData({
            name,email
           }))
           dispatch(login())
           if(tokendata){
            localStorage.setItem('token',tokendata);
            navigate('/content');
           }else{
            alert('Please Try Again')
           }
         
           console.log(data)
        } catch (error) {
            console.log(error,"User Not Found")
        }
    }
  return (
    <div className=' bg-gray-900 font-serif w-full h-screen flex flex-col justify-center content-center'>
        <form className='bg-gray-300 rounded-md p-7 text-xl mx-auto text-white flex flex-col w-fit content-center' >
           <h1 className='text-gray-900 p-3 text-3xl text-center'>Login</h1>
            <lable className='text-gray-900 p-1 ' htmlFor='email'>Email:</lable>
            <input className='m-1 p-1 text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    type='email' id='email' name='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <lable className='text-gray-900 p-1' htmlFor='password'>Password:</lable>
            <input className='m-1 p-1 text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    type='password' id='password' name='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <p className='text-sm p-1 text-gray-600'>Don't have an account? <span onClick={()=>navigate('/register')} className='text-sm text-gray-900 cursor-pointer'>Register now</span></p>      
            <button className='bg-rose-500 text-gray-900 rounded-md w-fit m-2 p-2 mx-auto' onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}
