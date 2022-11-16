import React from 'react'
import { useState,useEffect } from 'react';


import {Bills} from '../../components/bills/Bills'
import axios from 'axios';

export const Home = () => {
    const [bills, setbills] = useState([]);

    useEffect(() => {
        const data = async () => {
            const response = await axios.get("http://localhost:2002/api/display")
            setbills(response.data)
        }
        data();
    }, [])
    console.log("Home Bills",bills)
  return (
    <div className='h-full'>
        <Bills bills={bills}/>
    </div>
  )
}
