import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { EnterBill } from './components/enterBill/EnterBill';
import { ViewBill } from './components/viewBill/ViewBill';
import { AllBills } from './components/allBill/AllBills';

function App() {
    return (
        <div className="App" >
            <h1> Bill SYSTEM</h1>
            <Routes>
                <Route path="/" element={<EnterBill />} />
                <Route path="/viewbill" element={<ViewBill />} />
                <Route path="/allbills" element={<AllBills />} />
            </Routes>
        </div>
    );
}

export default App;