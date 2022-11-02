import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'



export const EditBill = () => {

    const location =useLocation()
    const path =location.pathname.split('/')[3];

    const [bill,setBill] =useState([]);
    const [name,setName]=useState()
    const [mobilenumber,setMobilenumber]=useState()
    const [gstnumber,setGstnumber]=useState()
    const [address,setAddress]=useState()
    const [date,setDate]=useState()
    const [billItems, setBillItems] = useState([{ item: '', quantity: '', amount: '', },]);
    const [billTotal, setBillTotal] = useState('');
    
    
    useEffect(()=>{
      const getBill =async ()=>{
          const res = await axios.get('http://localhost:2002/api/'+ path);
          const data =res.data;
          console.log("res.data",data)
          setBill(data)
          setName(data.name)
          setMobilenumber(data.mobilenumber)
          setAddress(data.address)
          setGstnumber(data.gstnumber)
          setDate(data.date)
          setBillItems(data.order)
          setBillTotal(data.total)
      }
      getBill()
     
  },[path])

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
console.log("Bill Total",billTotal)


    const handleEdit = async () => {
        try {
            await axios.put(`http://localhost:2002/api/${bill._id}`,{
                name:name,mobilenumber:mobilenumber,gstnumber:gstnumber,address:address,date:date,order:billItems,total:billTotal
            })
            window.location.replace(`http://localhost:3000/bill/${bill._id}`)

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
        <div>
            <h1>EnterBill</h1>
            <form className='enterbill'>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Name' name='name' value={name} onChange={e => setName(e.target.value)} required />
                <br />
                <label htmlFor='mobilenumber'>Mobile Number: </label>
                <input type='number' placeholder='Mobile Number' name='mobilenumber' value={mobilenumber} onChange={e => setMobilenumber(e.target.value)} />
                <br />
                <label htmlFor='gstnumber' >GST Number: </label>
                <input type='text' placeholder='GST Number' name='gstnumber' value={gstnumber} onChange={e => setGstnumber(e.target.value)} />
                <br />
                <label htmlFor='address'>Address: </label>
                <input type='text' placeholder='Address' name='address' value={address} onChange={e => setAddress( e.target.value )} required />
                <br />
                <label htmlFor='date' >Date: </label>

                


{/* 
                {order.map((billItems, index) => (
                    <div key={index}>
                        <input type='text' required name='item' placeholder='Enter New Item' value={billItems.item} onChange={event => handleChangeInput(index, event)} />
                        <input type='number' name='quantity' placeholder='Enter Quantity' value={billItems.quantity} onChange={event => handleChangeInput(index, event)} />
                        <input type='number' name='amount' placeholder='Enter Amount' value={billItems.amount} onChange={event => handleChangeInput(index, event)} />

                        <button onClick={() => handleAdd()}>Add</button>
                        <button onClick={() => handleRemove(index)}>Remove</button>

                    </div>
                ))} */}

{/* 
              {order.map((b,index)=>{
                return(
                    <div key={index}>
                        <input type='text' required name='item' placeholder='Enter New Item' value={b.item} onChange={e=>change(index,e)}/>
                        <input type='number' name='quantity' placeholder='Enter Quantity' value={b.quantity} onChange={e=>change(index,e)} />
                        <input type='number' name='amount' placeholder='Enter Amount' value={b.amount} onChange={e=>change(index,e)}/>

                    </div>
                )
              })} */}

               {billItems.map((billItems, index) => (
                    <div key={index}>
                        <input type='text' required name='item' placeholder='Enter New Item' value={billItems.item} onChange={event => handleChangeInput(index, event)} />
                        <input type='number' name='quantity' placeholder='Enter Quantity' value={billItems.quantity} onChange={event => handleChangeInput(index, event)} />
                        <input type='number' name='amount' placeholder='Enter Amount' value={billItems.amount} onChange={event => handleChangeInput(index, event)} />

                        <button onClick={() => handleAdd()}>Add</button>
                        <button onClick={() => handleRemove(index)}>Remove</button>

                    </div>
                ))}

                <span>Total: {billTotal}</span>
                <button onClick={handleEdit}>Edit</button>
            </form>
            {/* <button onClick={handleAdd}>ADDNEW</button> */}
        </div>
    )
}
