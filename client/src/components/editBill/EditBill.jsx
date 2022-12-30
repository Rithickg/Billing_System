import React from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'



export const EditBill = () => {
    const navigate =useNavigate();
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
          const res = await axios.get('https://billing-system-api.onrender.com/api/'+ path);
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


    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`https://billing-system-api.onrender.com/api/${bill._id}`,{
                name:name,mobilenumber:mobilenumber,gstnumber:gstnumber,address:address,date:date,order:billItems,total:billTotal
            })
            
            navigate(`/bill/${bill._id}`)

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
        <div className='flex flex-col h-[100%] font-serif bg-gray-900 mx-0'>
            <h1 className='text-3xl text-white text-center'>EditBill</h1>
            <form className='bg-gray-300 sm:w-5/6 md:w-1/2 mx-auto  p-4 rounded-md flex flex-col justify-center'>
                <label htmlFor='name'>Name: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  type='text' id='name' placeholder='Name' name='name' value={name} onChange={e => setName(e.target.value)} required />
                <br />
                <label htmlFor='mobilenumber'>Mobile Number: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  type='number' placeholder='Mobile Number' name='mobilenumber' value={mobilenumber} onChange={e => setMobilenumber(e.target.value)} />
                <br />
                <label htmlFor='gstnumber' >GST Number: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  type='text' placeholder='GST Number' name='gstnumber' value={gstnumber} onChange={e => setGstnumber(e.target.value)} />
                <br />
                <label htmlFor='address'>Address: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  type='text' placeholder='Address' name='address' value={address} onChange={e => setAddress( e.target.value )} required />
                <br />
                <label htmlFor='date' >Date: </label>
                <input className='text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  type='date' id='date' value={date} onChange={e => setDate( e.target.value )} name='date' />
                <br/>
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

                <span className='text-center'>Total: {billTotal}</span>
                <button className='bg-rose-500 w-fit mx-auto p-2 m-1 rounded-md' onClick={handleEdit}>Edit</button>
            </form>
        </div>
    )
}
