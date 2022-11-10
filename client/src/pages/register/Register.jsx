import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:2002/api/register",{
            name,email,password
           })
           window.location.replace("http://localhost:3000/login");
           
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className=' bg-gray-900 font-serif w-full h-screen flex flex-col justify-center content-center'>
        <form className='bg-gray-300 rounded-md p-7 text-xl mx-auto text-white flex flex-col w-fit content-center'>
        <h1 className='text-gray-900 p-3 text-3xl text-center'>Register</h1>
            <label className='text-gray-900 p-1 ' htmlFor='name'>Name:</label>
            <input className='m-1 p-1 text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                     type='text' id ='name' placeholder='Name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <lable className='text-gray-900 p-1 ' htmlFor='email'>Email:</lable>
            <input className='m-1 p-1 text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                     type='email' id='email' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <lable className='text-gray-900 p-1 ' htmlFor='password'>Password:</lable>
            <input className='m-1 p-1 text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                     type='password' id='password' name='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='bg-rose-500 text-gray-900 rounded-md w-fit m-2 p-2 mx-auto' onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}
