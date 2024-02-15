import { Link, useLocation } from "react-router-dom";
import SearchBOx from "./SearchBox";
import { useEffect, useState } from "react";

const Navbar = ({show,showMenu}) => {
    const loc=useLocation()
    const [currentId,setCurrentId]=useState("home")
    const handleClick=(e)=>{
        setCurrentId(e.target.id)
    }
    useEffect(()=>{
        loc.pathname==='/'&&setCurrentId('home')//:setCurrentId(currentId)
        loc.pathname==='/about'&&setCurrentId('about')//:setCurrentId(currentId)
        loc.pathname==='/contact'&&setCurrentId('contact')//:setCurrentId(currentId)
        loc.pathname==='/register-r'&&setCurrentId('form')
        loc.pathname==='/register-c'&&setCurrentId('form')
    })
    return ( 
        <>
            <div className="row py-2 px-md-5 px-2 nav-row">
                <div className="nav-col-1 col-md-6 col-8 px-2 d-flex">
                    {/* <img src="/assets/img/logo-color.svg" alt="logo" style={{height:'3em'}} className="rounded-circle" /> */}
                    <img src="/assets/img/logo-no-background.svg" alt="logo" style={{width:'8em'}} className="img-fluid " />
                
                    {/* <h2 className="d-flex align-items-center" style={{marginLeft:"-.35em"}}><span className="x">fud</span><span className="chop">Row</span></h2> */}
                </div>
                <div className="nav-col-2 col-md-6 col-4 d-md-flex d-flex justify-content-end align-items-center">
                    <div className="menu-logo d-flex d-md-none justify-content-end" onClick={()=>{showMenu()}}><i className={show?"fas fa-times":"fas fa-bars"}></i></div>
                    <div className={"link-1 flex-fill d-md-flex d-none justify-content-end " + (currentId==='home'?"active1":"")}><Link to='/' id="home" onClick={(e)=>{handleClick(e)}}>Home</Link></div>
                    <div className={"link-1 flex-fill d-md-flex d-none justify-content-end " + (currentId==='about'?"active1":"")}><Link to='/about' id="about" onClick={(e)=>{handleClick(e)}}> About Us</Link></div>
                    <div className={"link-1 flex-fill d-md-flex d-none justify-content-end " + (currentId==='contact'?"active1":"")}><Link to='/contact' id="contact" onClick={(e)=>{handleClick(e)}}>Contact Us</Link></div>
                    <div className={"link-1 flex-fill d-md-flex d-none justify-content-end dropdown "}>
                        <button type="button" className="btn btn-search dropdown-toggle text-light" data-bs-toggle="dropdown">
                            Register
                        </button>
                            <ul className="dropdown-menu ps-4">
                                <li><Link to='/register-c'>Customer</Link></li>
                                <li><Link to='/register-r'>Restaurant</Link></li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="search-section px-md-4 mb-3">
                <SearchBOx />
            </div>
        </>
     );
}
 
export default Navbar;