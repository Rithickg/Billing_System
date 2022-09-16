import React from 'react'
import { Link } from 'react-router-dom'

export const ViewBill = () => {

    return (
        <div>
            <Link to='/'><h1>Home 🏠</h1></Link>
            <h1>ViewBill</h1>
            <div>
                <h2>INVOICE</h2>
                <h4>GST NO:564RV685FT22Z</h4>
                <h4>MOB: 8564297536</h4>
                <h1>SM TRADERS</h1>
                <h5>Deals in : Building Construction Materials</h5>
                <h4>Address : No:40-Indhra street,cholaipallam,chennai-78</h4>
                <hr />
                <h4>M/s</h4>
                <hr />
            </div>
            <div>
                <h4>Invoice No: 7665263636</h4>
                <h4>Date:</h4>
                <h4>Purchaser GST No:</h4>
            </div>
            <div>
                <table >
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cement</td>
                            <td>55</td>
                            <td>5626</td>
                        </tr>
                        <tr>
                            <td>Steel</td>
                            <td>63</td>
                            <td>4626</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>-----------------------------------------------------------</tr>
                        <tr>
                            <td>Total</td>
                            <td>2</td>
                            <td>11063</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div>
                <h4>Sub Total :11063</h4>
                <h4>GST :963</h4>
                <h4>Total :12030</h4>
                <hr />
                <h4>Total in Words:</h4>
                <hr />
            </div>
            <div>
                <h3>Terms & Conditions :</h3>
                <p>1).Our Risk and Responsibility as soon as the goods leave our premises.</p>
                <p>2).No Compliants will be after 24 hours of delivery.</p>
                <h2>For SM TRADERS</h2>
                <br />
                <h4>Signature</h4>
            </div>
        </div>
    )
}
