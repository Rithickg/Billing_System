import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { EnterBill } from './components/enterBill/EnterBill';
import {SingleBill} from './components/singleBill/SingleBill'
import {EditBill} from './components/editBill/EditBill'
import {Home} from './pages/home/Home'
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import { MainPage } from './pages/main/MainPage';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/enterbill" element={<EnterBill />} />
                <Route path="/bills" element={<Home />} />
                <Route path='/bill/edit/:billId' element={<EditBill />} />
                <Route path ='/bill/:billId' element={<SingleBill />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;