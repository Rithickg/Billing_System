import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const AllBills = () => {

    const [bill, setBill] = useState()
    useEffect(() => {
        const bills = async () => {
            const res = await axios.get('http://localhost:2002/api/display')
            setBill(res.data)
            console.log(bill);
        };
        bills();
    }, []);
    // console.log(bill);

    // bill.map(x => console.log(x))



    // useEffect(() => {
    //     const getBill = async () => {
    //         const res = await axios.get("http://localhost:2002/api/display")
    //         console.log(res);
    //         setName(res)
    //     }
    //     getBill()
    // },[])
    return (
        <div>
            <h1>AllBills</h1>

            {bill.map(x => (
                <div key={x._id}>
                    <p>{x.name}</p>
                    <p>{x.mobilenumber}</p>
                    <ul>{x.order.map((y, i) =>
                        <li key={i}>
                            {y.item}
                            {y.quantity}
                            {y.amount}
                        </li>)}</ul>
                </div>
            ))}

        </div>

    )
}
