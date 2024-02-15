import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes,Route, useLocation} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {
  const [show,setShow]=useState(false)
    const showMenu=()=>{
        setShow(!show)
    }
  return (
    <>

    <Router>
      {/* {show && <Menu showMenu={showMenu}/>} */}
      <Navbar show={show} showMenu={showMenu}/>
      {show && <Menu showMenu={showMenu}/>}
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register-r' element={<Form type={"restaurant"} />} />
        <Route path='/register-c' element={<Form type={"customer"} />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
