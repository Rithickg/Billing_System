import React from 'react'
import './login.css'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {login,logout} from '../../features/user'
import { Profile } from '../profile/Profile'

export const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch =useDispatch();

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
        <h1>Login</h1>
        <form className='loginForm'>
            <lable htmlFor='email'>Email:</lable>
            <input type='email' id='email' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <lable htmlFor='password'>Password:</lable>
            <input type='password' id='password' name='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Login</button>
        </form>
        <button onClick={()=>{ dispatch(login({
              name:"rithick",age:20,email:"rithick@gmail.com"
            }))
            // window.location.replace('http://localhost:3000/profile')
             }}>Login</button>
              <button onClick={()=>{ dispatch(logout())}}>Logout</button>
          <Profile/>   
    </div>
  )
}
