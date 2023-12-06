import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Accessories from '../Components/Accessories';
import Fashion from '../Components/Fashion';
import Kitchen from '../Components/Kitchen';
import Laptops from '../Components/Laptops';
import Mobile from '../Components/Mobile';
import Header from '../Head&Foot/Header';
import Footer from '../Head&Foot/Footer';
import { NavLink } from 'react-router-dom';
import "./RoutesCompo.css"
import TocIcon from '@mui/icons-material/Toc';
import ClearIcon from '@mui/icons-material/Clear';
function RoutesCompo() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen);
     };
  return (
    <>
    <Header/>
        <div>   
            <button className="navbar-toggle" onClick={handleNavbar}>
                {navbarOpen ? <ClearIcon/> : <TocIcon/>}
            </button>
        </div>
    <BrowserRouter>
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
        </Routes>
    </BrowserRouter>
    
    <Footer/>
    </>
  )
}

export default RoutesCompo;