import React from 'react'
import './profile.css'
import { useSelector } from 'react-redux'

export const Profile = () => {
    const user = useSelector((state)=>state.user.value);
  return (
    <div className='profile'>
        <h1>Profile</h1>
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Email:{user.email}</p>
    </div>
  )
}
