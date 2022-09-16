import React from 'react'
import './enterbill.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



export const EnterBill = () => {

    const [billinfo, setBillInfo] = useState({
        name: '', mobilenumber: '', gstnumber: '', address: '', date: ''
    })
    console.log(billinfo.name)
    const [billItems, setBillItems] = useState([{ item: '', quantity: '', amount: '', },]);

    const handleChangeInput = (index, event) => {
        const values = [...billItems];
        values[index][event.target.name] = event.target.value;
        setBillItems(values);
        console.log(index, event.target.name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = billinfo.name;
        const mobilenumber = billinfo.mobilenumber;
        const gstnumber = billinfo.gstnumber;
        const address = billinfo.address;
        const date = billinfo.date;
        const order = billItems;
        console.log(name, mobilenumber, gstnumber, address, date, order);
        try {
            await axios.post("http://localhost:2002/api/create", {
                name, mobilenumber, gstnumber, address, date, order
            })
        } catch (error) {
            console.log(error)
        }
        console.log("BillInfo", billinfo)
        console.log("BillItems", billItems);
        console.log(billinfo.name)
        console.log(billItems[1].amount)
    }

    const handleAdd = () => {
        setBillItems([...billItems, { item: '', quantity: '', amount: '', }])
    }

    const handleRemove = (index) => {
        const values = [...billItems]
        values.splice(index, 1);
        setBillItems(values)
    }
    console.log(billItems.length)


    return (
        <div>
            <h1>EnterBill</h1>
            <form className='enterbill'>

                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Name' name='name' value={billinfo.name} onChange={e => setBillInfo({ ...billinfo, name: e.target.value })} required />
                <br />
                <label htmlFor='mobilenumber'>Mobile Number: </label>
                <input type='tel' placeholder='Mobile Number' name='mobilenumber' value={billinfo.mobilenumber} onChange={e => setBillInfo({ ...billinfo, mobilenumber: e.target.value })} />
                <br />
                <label htmlFor='gstnumber' >GST Number: </label>
                <input type='text' placeholder='GST Number' name='gstnumber' value={billinfo.gstnumber} onChange={e => setBillInfo({ ...billinfo, gstnumber: e.target.value })} />
                <br />
                <label htmlFor='address'>Address: </label>
                <input type='text' placeholder='Address' name='address' value={billinfo.address} onChange={e => setBillInfo({ ...billinfo, address: e.target.value })} required />
                <br />
                <label htmlFor='date' >Date: </label>
                <input type='date' id='date' onChange={e => setBillInfo({ ...billinfo, date: e.target.value })} name='date' />

                {billItems.map((billItems, index) => (
                    <div key={index}>

                        <input type='text' required name='item' placeholder='Enter New Item' value={billItems.item} onChange={event => handleChangeInput(index, event)} />
                        <input type='number' name='quantity' placeholder='Enter Quantity' value={billItems.quantity} onChange={event => handleChangeInput(index, event)} />
                        <input type='number' name='amount' placeholder='Enter Amount' value={billItems.amount} onChange={event => handleChangeInput(index, event)} />

                        <button onClick={() => handleAdd()}>Add</button>

                        <button onClick={() => handleRemove(index)}>Remove</button>

                    </div>
                ))}
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={handleAdd}>ADDNEW</button>
            <h1>DisplayBill</h1>
            <div>
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
                                <td>{billItems.item}</td>
                                <td>{billItems.quantity}</td>
                                <td>{billItems.amount}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <Link to='/viewbill'><h1>ViewBill 📝</h1></Link>
            <Link to='/allbills'><h1>AllBills 📝</h1></Link>
        </div>
    )
}
