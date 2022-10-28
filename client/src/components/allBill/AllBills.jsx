import React from 'react'
import axios from 'axios'
import './allBill.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export const AllBills = ({bills}) => {
    const [allbill, setAllbill] = useState([]);

    useEffect(() => {
        const data = async () => {
            const response = await axios.get("http://localhost:2002/api/display")
            // const json = await response.json()
            setAllbill(response.data)
        }
        data();
    }, [])



    const arrr = allbill.map((x) => (x.order.map((y) => (
        y.amount
    ))))
    console.log(arrr)
    console.log(arrr[1])

    let printArray = function (arr) {
        if (typeof (arr) == "object") {
            for (var i = 0; i < arr.length; i++) {
                printArray(arr[i]);
            }
        }
        else console.log(arr)
    }
    printArray(arrr);


// console.log("allBill",allbill)

//     const handleDelete = async ()=>{
//         try {
//             await axios.delete(`http://localhost:2002/api/${allbill._id}`);
//         } catch (error) {
//             console.log(error)
//         }
//     }




    // const total = (arr, i) => {
    //     let sum = 0;
    //     let newarr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         sum = sum + arr[i];
    //         sum.push(newarr)
    //     }
    //     console.log(newarr)
    // }
    // total()
    // console.log(total)
    // let arr1 = arr[1];
    // let sum = 0;
    // for (let i = 0; i < arr1.length; i++) {
    //     sum += arr1[i];
    // }
    // console.log(sum)

    // const sum = (arr, i) => {

    // }
    // sum()

console.log("id",allbill._id)
    console.log(allbill)
    return (
        <div>
            <h1>All Bills List</h1>
            <Link to='/viewbill'><h1>ViewBill 📝</h1></Link>
            <div className='bill'>
                {allbill.map((x) => (
            <Link to='viewbill'>
                    <div key={x._id} className='bill_info'>
                        <h3>Name:{x.name}</h3>
                        <h3>BillNumber:{x._id}</h3>
                        <h3>MobilNumber:{x.mobilenumber}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>

                            {x.order.map((y, i) => (
                                <tbody key={i}>
                                    <tr >
                                        <td>{y.item}</td>
                                        <td>{y.quantity}</td>
                                        <td>{y.amount}</td>
                                        <td>Total:{(y.amount) + (y.amount)}</td>
                                    </tr>
                                </tbody>
                            ))}
                            <tfoot>
                                <tr>-----------------------------------------------------------</tr>
                                <tr>
                                    <td>Total</td>
                                    <td>2</td>
                                    <td>11065</td>
                                </tr>
                            </tfoot>
                        </table>
                                {/* <button>Edit</button>
                                <button onClick={handleDelete}>Delete</button> */}
                    </div>
            </Link>
                ))
                }
            </div>
        </div >
    )
}
