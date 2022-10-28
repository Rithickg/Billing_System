import React from 'react'
import './bill.css'
import { Link } from 'react-router-dom'

export const Bill = ({bill}) => {
  console.log(bill)
  return (
    <div className='bill_info' key={bill._id}>
      <Link to={`/bill/${bill._id}`}>
      <div>
      <h3>Name : {bill.name}</h3>
      <h3>BillNumber : {bill._id}</h3>
      <h3>MobileNumber : {bill.mobilenumber}</h3>
      <table className='bill_tab'>
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
                                        <td>{y.item}</td>
                                        <td>{y.quantity}</td>
                                        <td>{y.amount}</td>
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
    </div>
  )
}
