import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const SingleBill = () => {
    const location =useLocation()
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
            window.location.replace('http://localhost:3000/home')
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit =async ()=>{
        try {
            window.location.replace(`http://localhost:3000/bill/edit/${bill._id}`)
        } catch (error) {
            console.log(error)
        }
    }
    console.log("bill.order",bill.order)
    console.log(bill)
    console.log("order",order)
  return (
    <div className='bg-gray-900 w-full h-screen flex flex-col justify-center content-center mt-0 mb-0 mx-auto my-auto'>
        <h1 className='text-rose-500'>SingleBill</h1>
        <div className='bg-slate-200 w-5/6 flex flex-col justify-center text-center'>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div className='flex '>
            <div className='border -3 border-black'>
                <h2>INVOICE</h2>
                <h4>GST NO:564RV685FT22</h4>
                <h4>MOB: 8524569513</h4>
                <h1>SM TRADERS</h1>
                <h5>Deals in : Building Construction Materials</h5>
                <h4>Address : No:40-Indhra street,cholaipallam,chennai-78</h4>
                <hr />
                <hr />
            </div>
            <div className='border -3 border-black'>
                <h4>Date:{bill.date}</h4>
            </div>
            </div>
            <div className='border -3 border-black'>
                <h4>M/s.{bill.name}</h4>
                <h4>Invoice No: {bill._id}</h4>
                <h4>Purchaser GST No:{bill.gstnumber}</h4>
                <h4>To Address:{bill.address}</h4>
            </div>
            <div>
            <table className='bill_tab'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    {order.map((q,i)=>(
                       <tbody key={i}>
                         <tr >
                           <td>{q.item}</td>
                           <td>{q.quantity}</td>
                           <td>{q.amount}</td>
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
            <div className='border -3 border-black'>
                <h4>Sub Total :{bill.total}</h4>
                <h4>GST :45</h4>
                <h4>Total :{`45 + ${parseInt(bill.total)}`}</h4>
                <hr />
                <h4>Total in Words:</h4>
                <hr />
            </div>
            <div className='border -3 border-black'>
                <h3>Terms & Conditions :</h3>
                <p>1).Our Risk and Responsibility as soon as the goods leave our premises.</p>
                <p>2).No Compliants will be after 24 hours of delivery.</p>
                <h2>For SM TRADERS</h2>
                <br />
                <h4>Signature</h4>
            </div>
        </div>
    </div>
  )
}
