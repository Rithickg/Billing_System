import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export const EnterBill = () => {
    const navigate = useNavigate();
    const userData =useSelector((state)=>state.user.user)
    const isLoggedin =useSelector((state)=>state.auth.isLoggedin)
    console.log(isLoggedin)
    let email = userData.email;

    const [billinfo, setBillInfo] = useState({
        name: '', mobilenumber: '', gstnumber: '', address: '', date: '',
    })
    const [billItems, setBillItems] = useState([{ item: '', quantity: '', amount: '', },]);
    const [billTotal, setBillTotal] = useState('');


    const handleChangeInput = (index, event) => {
        const values = [...billItems];
        values[index][event.target.name] = event.target.value;
        setBillItems(values);
        console.log(index, event.target.name)
    }

    const tot = billItems.map((x) => (
        parseInt(x.amount)
    ))
    console.log(tot)
    let val = tot.reduce(function (total, num) {
        return total + num
    })

    useEffect(()=>{
            setBillTotal(val);
    },[val])


    const handleSubmit = async (e) => {
        setBillTotal(val)
        e.preventDefault()
        console.log(billTotal)
        console.log(typeof (billTotal))
        const name = billinfo.name;
        const mobilenumber = billinfo.mobilenumber;
        const gstnumber = billinfo.gstnumber;
        const address = billinfo.address;
        const date = billinfo.date;
        const order = billItems;
        const total = billTotal;
        console.log(name, mobilenumber, gstnumber, address, date, order, total,email);
        try {
            await axios.post("http://localhost:2002/api/create", {
                name, mobilenumber, gstnumber, address, date, total, order,email
            })
            // window.location.replace('http://localhost:3000/bills')
            navigate('/bills');
            console.log(name, mobilenumber, gstnumber, address, date, order, total,email);
        } catch (error) {
            console.log(error)
        }
    }

    const handleAdd = () => {
        setBillItems([...billItems, { item: '', quantity: '', amount: '', }])
    }

    const handleRemove = (index) => {
        const values = [...billItems]
        values.splice(index, 1);
        setBillItems(values)
    }


    return (
        <div className='flex flex-col h-full font-serif bg-gray-900 mx-0'>
            <h1 className='text-3xl text-white text-center'>EnterBill</h1>
            <form className='bg-gray-300 sm:w-5/6 md:w-1/2 mx-auto p-4 rounded-md flex flex-col justify-center'>
                <label htmlFor='name'>Name: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                 type='text' id='name' placeholder='Enter Name' name='name' value={billinfo.name} onChange={e => setBillInfo({ ...billinfo, name: e.target.value })} required />
                <br />
                <label htmlFor='mobilenumber'>Mobile Number: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                type='number' placeholder='Enter Mobile Number' name='mobilenumber' value={billinfo.mobilenumber} onChange={e => setBillInfo({ ...billinfo, mobilenumber: parseInt(e.target.value) })} />
                <br />
                <label htmlFor='gstnumber' >GST Number: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  type='text' placeholder='Enter GST Number' name='gstnumber' value={billinfo.gstnumber} onChange={e => setBillInfo({ ...billinfo, gstnumber: e.target.value })} />
                <br />
                <label htmlFor='address'>Address: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  type='text' placeholder='Enter Address' name='address' value={billinfo.address} onChange={e => setBillInfo({ ...billinfo, address: e.target.value })} required />
                <br />
                <label htmlFor='date' >Date: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  type='date' id='date' onChange={e => setBillInfo({ ...billinfo, date: e.target.value })} name='date' />
                <br/>
                {billItems.map((billItems, index) => (
                    <div className='flex flex-col justify-center p-1' key={index}>
                        <input className='m-1 text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                           type='text' required name='item' placeholder='Enter New Item' value={billItems.item} onChange={event => handleChangeInput(index, event)} />
                        <input className='m-1 text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                           type='number' name='quantity' placeholder='Enter Quantity' value={billItems.quantity} onChange={event => handleChangeInput(index, event)} />
                        <input className='m-1 text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                           type='number' name='amount' placeholder='Enter Amount' value={billItems.amount} onChange={event => handleChangeInput(index, event)} />
                        <div className='flex justify-center'>
                        <button className='bg-rose-500 p-1 m-1 rounded-md' onClick={() => handleAdd()}>Add</button>
                        <button className='bg-rose-500 p-1 m-1 rounded-md' onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    </div>
                    
                ))}
                <span className='text-center'>
                    Total: {billTotal}
                </span>
                <button className='bg-rose-500 w-fit mx-auto p-2 m-1 rounded-md' onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={handleAdd}>ADDNEW</button>
            <div className='bg-gray-300 sm:w-5/6 overflow-auto md:w-4/6 mx-auto p-4 rounded-md flex flex-col justify-center'>
            <h1 className='text-center text-xl'>Display-Bill</h1>
                <table >
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    {billItems.map((billItems, index) => (
                        <tbody key={index}>
                            <tr>
                                <td className='text-stone-900'>{billItems.item}</td>
                                <td className='text-stone-900'>{billItems.quantity}</td>
                                <td className='text-stone-900'>{billItems.amount}</td>
                            </tr>
                        </tbody>
                    ))}
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th colSpan='2'>{billTotal}</th>
                        </tr>
                    </tfoot>
                </table>
                {/* <Link to='/viewbill'><h1>ViewBill 📝</h1></Link>
                <Link to='/allbills'><h1>AllBills 📝</h1></Link> */}
            </div>
           
        </div>
    )
}
