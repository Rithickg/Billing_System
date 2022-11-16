import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import {useReactToPrint} from 'react-to-print'
import { useLocation ,useNavigate } from 'react-router-dom';

export const SingleBill = () => {
    const location =useLocation()
    const navigate =useNavigate()
    const path =location.pathname.split('/')[2];
    const [bill,setBill] =useState([]);
    const [order,setOrder] =useState([]);

    useEffect(()=>{
        const getBill =async ()=>{
            const res = await axios.get('http://localhost:2002/api/'+ path);
            console.log("res.data",res.data)
            setBill(res.data)
            setOrder(res.data.order)
        }
        getBill()
    },[path])

    const handleDelete = async ()=>{
        try {
            await axios.delete(`http://localhost:2002/api/${bill._id}`)
            navigate('/bills')
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit =async ()=>{
        try {
            navigate(`/bill/edit/${bill._id}`)
        } catch (error) {
            console.log(error)
        }
    }
    console.log("bill.order",bill.order)
    console.log(bill)
    console.log("order",order)

    const componentRef =useRef()
    const handlePrint =useReactToPrint({
        content: ()=>componentRef.current,
        documentTitle: bill._id,
        onAfterPrint: ()=>alert("Print Success")
    });

  return (

    <div className=' bg-gray-900 font-serif w-full h-full flex flex-col justify-center'>
        <button onClick={()=>navigate('/bills')} className='bg-rose-500 w-fit p-2 mt-2 ml-2 rounded-md'>Back</button>
        <h1 className='text-rose-500 text-center m-2 p-2'>Bill NO:{bill._id}</h1>
        <div ref={componentRef} className=' bg-slate-200 w-auto flex flex-col sm:m-3 md:m-auto  rounded-lg '>
            <div className='flex flex-wrap px-2 py-2'>
            <div className='text-md'>
                <h2 className='text-4xl text-indigo-900 '>INVOICE</h2>
                <h3>From:</h3>
                <h4>GST NO:564RV685FT22</h4>
                <h4>MOB: 8524569513</h4>
                <h1>SM TRADERS</h1>
                <h5>Deals in : Building Construction Materials</h5>
                <h4>Address : No:40-Indhra street,cholaipallam,chennai-78</h4>
            </div>
            <div className='flex items-center'>
                <h4>Date:{bill.date}</h4>
            </div>
            </div>
            <div className='flex flex-wrap px-2 py-2 border-t-2 border-dotted border-current'>
            <div className='text-md'>
                <h3>To:</h3>
                <h4>M/s.{bill.name}</h4>
                <h4>Mob Number: {bill.mobilenumber}</h4>
                <h4>Purchaser GST No:{bill.gstnumber}</h4>
                <h4>To Address:{bill.address}</h4>
            </div>
            <div className='flex items-center p-2'>
                <h4>Invoice No:{bill._id}</h4>
            </div>
            </div>
            <div className='flex justify-center py-2 text-center border-t-2 border-current border-dotted'>
            <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    {order.map((q,i)=>(
                       <tbody key={i}>
                         <tr>
                           <td className='text-stone-900'>{q.item}</td>
                           <td className='text-stone-900'>{q.quantity}</td>
                           <td className='text-stone-900'>{q.amount}</td>
                         </tr>
                       </tbody>
                    ))}
                    <tfoot>
                             <tr height = '20px'></tr>
                             <tr>
                                <td colSpan='2'>Total</td>
                                <td>{bill.total}</td>
                            </tr>
                     </tfoot>
            </table>
            </div>
            <div className='text-center py-2 border-t-2 border-current border-dotted'>
                <h4>Sub Total :{bill.total}</h4>
                <h4>GST :45</h4>
                <h4>Total :{`45 + ${parseInt(bill.total)}`}</h4>
                <hr />
                <h4>Total in Words:</h4>
                <hr />
            </div>
            <div className='py-2 text-center border-t-2 border-current border-dotted'>
                <h4>Signature :</h4>
                <br />
                <h3>Terms & Conditions :</h3>
                <p>1).Our Risk and Responsibility as soon as the goods leave our premises.</p>
                <p>2).No Compliants will be after 24 hours of delivery.</p>
                <h2>For SM TRADERS</h2>
            </div>
        </div>
        <div className='flex justify-center'>
                <button className='bg-rose-500 p-2 m-1 rounded-md' onClick={handleEdit}>Edit Bill</button>
                <button className='bg-rose-500 p-2 m-1 rounded-md' onClick={handleDelete}>Delete Bill</button>
                <button className='bg-rose-500 p-2 m-1 rounded-md' onClick={handlePrint}>Print Bill</button>
            </div>
    </div>
  )
}
