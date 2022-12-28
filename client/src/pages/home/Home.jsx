import React from 'react'
import { useState,useEffect } from 'react';


import {Bills} from '../../components/bills/Bills'
import axios from 'axios';

export const Home = () => {
    const [bills, setbills] = useState([]);

    useEffect(() => {
        const data = async () => {
            const response = await axios.get("https://web-production-aa15.up.railway.app/api/display")
            setbills(response.data)
        }
        data();
    }, [])
    console.log("Home Bills",bills)
  return (
    <div className='bg-gray-900 h-screen'>
        <Bills bills={bills}/>
    </div>
  )
}
