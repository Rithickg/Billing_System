import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'


export const Bill = ({bill}) => {
    const userData = useSelector((state)=>state.user.user);
    console.log(userData)
    console.log(bill)
    console.log(bill.email);
  return (
  
    <div key={bill._id}>
        {
            bill.email === userData.email && (
                <Link to={`/bill/${bill._id}`}>
      <div className=' m-5 p-4 rounded-md flex font-serif flex-col justify-center text-lg bg-slate-200'>
      <h3>Name : {bill.name}</h3>
      <h3>BillNumber : {bill._id}</h3>
      <h3>MobileNumber : {bill.mobilenumber}</h3>
      <table className='text-center m-1 font-mono  text-lg'>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>

                            {bill.order.map((y, i) => (
                                <tbody >
                                    <tr key={i}>
                                        <td className='text-stone-900'>{y.item}</td>
                                        <td className='text-stone-900'>{y.quantity}</td>
                                        <td className='text-stone-900'>{y.amount}</td>
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
      </Link>
            )
        }
    </div>
  )
}
