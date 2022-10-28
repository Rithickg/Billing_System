import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'



export const EditBill = () => {

    // const [billinfo, setBillInfo] = useState({
    //     name: '', mobilenumber: '', gstnumber: '', address: '', date: '',
    // })
    const location =useLocation()
    const path =location.pathname.split('/')[3];
    const [bill,setBill] =useState([]);
    const [order,setOrder] =useState([]);


    const [name,setName]=useState()
    const [mobnumber,setMobnumber]=useState()
    const [gstnumber,setGstnumber]=useState()
    const [address,setAddress]=useState()
    const [date,setDate]=useState()
    const [billTotal, setBillTotal] = useState('');
    const [billItems, setBillItems] = useState([{ item: '', quantity: '', amount: '', },]);



    
    useEffect(()=>{
      const getBill =async ()=>{
          const res = await axios.get('http://localhost:2002/api/'+ path);
          const data =res.data;
          console.log("res.data",data)
          setBill(data)
          setOrder(data.order)
          setName(data.name)
          setMobnumber(data.mobilenumber)
          setAddress(data.address)
          setGstnumber(data.gstnumber)
          setDate(data.date)
      }
      getBill()
  },[path])

  console.log("bill.order",bill.order)
  console.log(bill)
  console.log("order",order)

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

    const handleEdit = async (e) => {
        // setBillTotal(val)

        // e.preventDefault()
        // console.log(billTotal)
        // console.log(typeof (billTotal))
        // const name = billinfo.name;
        // const mobilenumber = billinfo.mobilenumber;
        // const gstnumber = billinfo.gstnumber;
        // const address = billinfo.address;
        // const date = billinfo.date;
        // const order = billItems;
        // const total = billTotal;
        // console.log(name, mobilenumber, gstnumber, address, date, order, total);
        try {
            await axios.put(`http://localhost:2002/api/posts/${bill._id}`,{
                name:name,mobilenumber:mobnumber
            })
        } catch (error) {
            console.log("name,Mobnumber",name,mobnumber)
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
        <div>
            <h1>EnterBill</h1>
            <form className='enterbill'>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Name' name='name' value={name} onChange={e => setName(e.target.value)} required />
                <br />
                <label htmlFor='mobilenumber'>Mobile Number: </label>
                <input type='number' placeholder='Mobile Number' name='mobilenumber' value={mobnumber} onChange={e => setMobnumber(e.target.value)} />
                <br />
                <label htmlFor='gstnumber' >GST Number: </label>
                <input type='text' placeholder='GST Number' name='gstnumber' value={gstnumber} onChange={e => setGstnumber(e.target.value)} />
                <br />
                <label htmlFor='address'>Address: </label>
                <input type='text' placeholder='Address' name='address' value={address} onChange={e => setAddress( e.target.value )} required />
                <br />
                <label htmlFor='date' >Date: </label>
                <input type='date' id='date' value={date} onChange={e => setDate( e.target.value )} name='date' />

                {order.map((billItems, index) => (
                    <div key={index}>
                        <input type='text' required name='item' placeholder='Enter New Item' value={billItems.item} onChange={event => handleChangeInput(index, event)} />
                        <input type='number' name='quantity' placeholder='Enter Quantity' value={billItems.quantity} onChange={event => handleChangeInput(index, event)} />
                        <input type='number' name='amount' placeholder='Enter Amount' value={billItems.amount} onChange={event => handleChangeInput(index, event)} />

                        <button onClick={() => handleAdd()}>Add</button>
                        <button onClick={() => handleRemove(index)}>Remove</button>

                    </div>
                ))}
                <span>
                    
                    Total:{val}
                     Total: {billTotal}
                   
                </span>
                <button onClick={handleEdit}>Edit</button>
            </form>
            <button onClick={handleAdd}>ADDNEW</button>
        </div>
    )
}
