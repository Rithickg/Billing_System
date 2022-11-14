import './App.css';
import { Routes, Route} from "react-router-dom";
import { EnterBill } from './components/enterBill/EnterBill';
import {SingleBill} from './components/singleBill/SingleBill'
import {EditBill} from './components/editBill/EditBill'
import {Home} from './pages/home/Home'
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import { MainPage } from './pages/main/MainPage';
import { useSelector } from 'react-redux';
import { Content } from './pages/content/Content';


function App() {
    const isLoggedin =useSelector((state)=>state.auth.isLoggedin)
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/enterbill" element={isLoggedin ? <EnterBill /> : <Login/>} />
                <Route path="/bills" element={ isLoggedin ? <Home /> : <Login/>} /> 
                <Route path="/login" element={<Login/>} />
                <Route path='/bill/edit/:billId' element={isLoggedin ? <EditBill /> : <Login/>} />
                <Route path ='/bill/:billId' element={<SingleBill />} />
                <Route path="/register" element={<Register/>} />
                <Route path='/profile' element={ isLoggedin ? <Profile/> : <Login/> }/>
                <Route path='/content' element={isLoggedin ? <Content/> : <Login/>}/>
            </Routes>
        </div>
    );
}

export default App;