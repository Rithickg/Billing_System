import React from 'react'
import { useState,useEffect } from 'react';
import { AllBills } from '../../components/allBill/AllBills';
// import { EnterBill } from '../../components/enterBill/EnterBill';
import { ViewBill } from '../../components/viewBill/ViewBill';
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
    <div>
        {/* <EnterBill /> */}
        <Bills bills={bills}/>
        <AllBills />
        {/* <ViewBill /> */}
    </div>
  )
}
