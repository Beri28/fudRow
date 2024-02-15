import { Link,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Menu = ({showMenu}) => {
    const loc=useLocation()
    const [currentId,setCurrentId]=useState("home")
    useEffect(()=>{
        loc.pathname==='/'&&setCurrentId('home')//:setCurrentId(currentId)
        loc.pathname==='/about'&&setCurrentId('about')//:setCurrentId(currentId)
        loc.pathname==='/contact'&&setCurrentId('contact')//:setCurrentId(currentId)
        loc.pathname==='/register-r'&&setCurrentId('form')
        loc.pathname==='/register-c'&&setCurrentId('form')
    })
    return ( 
        <div className="menu d-md-none">
            <div className="menu-box">
            <div className="menu-content ms-auto p-4 w-75 h-50 bg-light">
                <div className={"link border-bottom py-2 " + (currentId==='home'?"active1":"")}><Link to='/' onClick={()=>{showMenu()}}>Home</Link></div>
                <div className={"link border-bottom py-2 " +  (currentId==='contact'?"active1":"")}><Link to='/contact' onClick={()=>{showMenu()}} >Contact Us</Link></div>
                <div className={"link border-bottom py-2 "  + (currentId==='about'?"active1":"")}><Link to='/about' onClick={()=>{showMenu()}}> About Us</Link></div>
                {/* <div className={"link border-bottom py-2 " + (currentId==='form'?"active1":"")}><Link to='/register' onClick={()=>{showMenu()}}>Register</Link></div> */}
                <div className={"link border-bottom py-2 dropdown "}>
                        <button type="button" className="btn btn-search dropdown-toggle text-light" data-bs-toggle="dropdown">
                            Register
                        </button>
                            <ul className="dropdown-menu ps-4">
                                <li><Link to='/register-c' onClick={()=>{showMenu()}}>Customer</Link></li>
                                <li><Link to='/register-r' onClick={()=>{showMenu()}}>Restaurant</Link></li>
                            </ul>
                    </div>
            </div>
            </div>
        </div>
     );
}
 
export default Menu;