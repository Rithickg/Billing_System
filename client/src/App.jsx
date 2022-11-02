import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { EnterBill } from './components/enterBill/EnterBill';
import { ViewBill } from './components/viewBill/ViewBill';
import { AllBills } from './components/allBill/AllBills';
import {SingleBill} from './components/singleBill/SingleBill'
import {Bills} from './components/bills/Bills';
import {Bill} from './components/bill/Bill'
import {EditBill} from './components/editBill/EditBill'
import {Home} from './pages/home/Home'
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';


function App() {
    return (
        <div className="App" >
            <h1> Bill SYSTEM</h1>
            <Routes>
                <Route path="/" element={<EnterBill />} />
                <Route path="/home" element={<Home />} />
                <Route path='/bill' element={<Bill />} />
                <Route path='/bill/edit/:billId' element={<EditBill />} />
                <Route path ='/bill/:billId' element={<SingleBill />} />
                <Route path='/bills' element={<Bills />} />
                <Route path="/viewbill" element={<ViewBill />} />
                <Route path="/allbills" element={<AllBills />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;