import React from 'react'
import './login.css'
import { useState } from 'react'
import axios from 'axios'


export const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
          const data =  await axios.post("http://localhost:2002/api/login",{
            email,password
           })
           console.log(data.data)
           const tokendata = data.data
            console.log(tokendata)
           

           if(tokendata){
            localStorage.setItem('token',tokendata);
            alert('Login Successful')
            window.location.replace('http://localhost:3000/profile')
           }else{
            alert('Please Try Again')
           }
         
           console.log(data)
        } catch (error) {
            console.log(error,"User Not Found")
        }
    }
  return (
    <div>
       <h1> Bill SYSTEM</h1>
       <h1>Login</h1>
        <form className='loginForm' >
       <h1>Login</h1>
            <lable htmlFor='email'>Email:</lable>
            <input type='email' id='email' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <lable htmlFor='password'>Password:</lable>
            <input type='password' id='password' name='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}
