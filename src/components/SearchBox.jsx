import { useState } from "react";

const SearchBOx = () => {
    const [text,setText]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(text)
    }
    return ( 
        <div className="search row d-flex align-items-center px-4 border-top border-bottom py-2">
            <form action="/search" id="search" onSubmit={(e)=>{handleSubmit(e)}} className="col-9 position-relative" style={{padding:'0.2em'}}>
                <input type="text" name="value" className="form-control" style={{paddingLeft:'2em',zIndex:'9'}} value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Search here"/>
                <i className="fas fa-search position-absolute" style={{top:'1em',left:'1em',color:'#ced4da'}}></i>
            </form>
            <button type="submit" form="search" className=" col-3 btn btn-success btn-search">Search</button> 
        </div>
     );
}
 
export default SearchBOx;