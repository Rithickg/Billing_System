import React from 'react'
import './register.css'
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
    <div>
        <h1>Register</h1>
        <form className='registerForm'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id ='name' placeholder='Name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <lable htmlFor='email'>Email:</lable>
            <input type='email' id='email' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <lable htmlFor='password'>Password:</lable>
            <input type='password' id='password' name='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}
