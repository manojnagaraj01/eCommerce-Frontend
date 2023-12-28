import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Accessories from '../Components/Accessories';
import Fashion from '../Components/Fashion';
import Kitchen from '../Components/Kitchen';
import Laptops from '../Components/Laptops';
import Mobile from '../Components/Mobile';
import { NavLink } from 'react-router-dom';
import "./RoutesCompo.css"
import TocIcon from '@mui/icons-material/Toc';
import ClearIcon from '@mui/icons-material/Clear';
import Dynamic from '../DynamicSet/Dynamic';
import Header from '../Head&Foot/Header';
import LoginSignup from '../Login & Signup/Login';
import Footer from '../Head&Foot/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItems from '../CartCompo/CartItems';
import PayPal from '../CartCompo/Checkout';
import Order from '../CartCompo/Order';
function RoutesCompo() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen);
     };
  return (
    <>
        <div>   
            <button className="navbar-toggle" onClick={handleNavbar}>
                {navbarOpen ? <ClearIcon/> : <TocIcon/>}
            </button>
        </div>
        <ToastContainer
          position="top-right"
          
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    <BrowserRouter>
        <Header/>
        <div className="listBar-parent">
            <div className={`listBar ${navbarOpen ? 'show' : '' }`}>
                <ul className="navContainer">
                    <li><NavLink className="anchorTag" to="/">Home</NavLink></li>
                    <li><NavLink className="anchorTag" to="/accessories">Accessories</NavLink></li>
                    <li><NavLink className="anchorTag" to="/fashion">Fashion</NavLink></li>
                    <li><NavLink className="anchorTag" to="/kitchen">Kitchen</NavLink></li>
                    <li><NavLink className="anchorTag" to="/laptops">Laptops</NavLink></li>
                    <li><NavLink className="anchorTag" to="/mobile">Mobile</NavLink></li>    
                </ul>
            </div>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/accessories' element={<Accessories/>}/>
            <Route path='/fashion' element={<Fashion/>}/>
            <Route path='/kitchen' element={<Kitchen/>}/>
            <Route path='/laptops' element={<Laptops/>}/>
            <Route path='/mobile' element={<Mobile/>}/>
            <Route path='/profile' element={<LoginSignup/>}/>
            <Route path='/:id' element={<Dynamic/>}/>
            <Route path='/cart' element={<CartItems/>}/>
            <Route path='/paypal/:id' element={<Order/>}/>
            
        </Routes>
        <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default RoutesCompo;