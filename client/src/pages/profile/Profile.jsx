
import React from 'react'
import { useSelector } from 'react-redux'



export const Profile = () => {
  const addUserDate =useSelector((state)=>state.user.user)
  console.log(addUserDate)
  console.log(addUserDate.name)
  return (
    <div>
        <h1>Count:</h1>
        <h1>Profile</h1>
        <p>Name:{addUserDate.name}</p>
        <p>Email:{addUserDate.email}</p>
    </div>
  )
}
