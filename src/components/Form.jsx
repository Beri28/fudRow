const Form = ({type}) => {
    return ( 
        <div className="d-flex justify-content-center mb-3">
        <form action="/register" className="p-4 my-2 col-md-6 shadow px-5 rounded">
            <div className="row justify-content-center mt-2">
                <img src="/assets/img/logo-no-background.svg" alt="logo" style={{width:'10em'}} className="img-fluid " />
            </div>
            <p className="h2 d-flex justify-content-start mt-2">Welcome! Please Sign Up.</p>
            <div className="form-group my-md-4 my-2">
                <label htmlFor="username" className="d-md-flex h5">Name :</label>
                <input type="text" className="form-control shadow" name="name" placeholder="Enter name" required/>
                {type==='restaurant' && <div className="form-text">Enter Restaurant name.</div>}
                {type==='customer' && <div className="form-text">Enter preferred username.</div>}
            </div>
            <div className="form-group my-md-4 my-2">
                <label htmlFor="password" className="d-md-flex h5">Password :</label>
                <input type="password" className="form-control shadow" name="password" placeholder="Enter password" required/>
                <div className="form-text">Password should be atleast 6 characters.</div>
            </div>
            <div className="form-group my-md-4 my-2">
                <label htmlFor="email" className=" d-md-flex  h5">Email :</label>
                <input type="email" className="form-control shadow" name="email" placeholder="Enter email"/>
                {type==='restaurant' && <div className="form-text">Enter Restaurant email. If you have no email, leave this empty.</div>}
                {type==='customer' && <div className="form-text">If you have no email, leave this empty.</div>}
            </div>
            <div className="form-group my-md-4 my-2">
                <label htmlFor="contact" className=" d-md-flex h5">Contact :</label>
                <input type="number" className="form-control shadow" name="contact" placeholder="Enter phone number" required/>
                {type==='restaurant' && <div className="form-text">Enter any contact we can use to get to you.</div>}
                {/* <div className="form-text">This is a required field</div> */}
            </div>
            <div className="form-group my-md-4 my-2">
                <label htmlFor="address" className=" d-md-flex  h5">Address :</label>
                <input type="text" className="form-control shadow" name="address" />
                {type==='restaurant' && <div className="form-text">Enter Restaurant address.</div>}
                {type==='customer' && <div className="form-text">Enter neighborhood(quarter) name or Hostel name</div>}
            </div>
            <div className="form-group my-md-3">
                <label htmlFor="address" className=" d-md-flex justify-content-md-center h5"></label>
                <input type="submit" value="Register" className="form-control shadow btn-outline-custom" name="address" />
            </div>
            {/* <button className="btn btn-outline-custom mt-3 w-100 w-md-75 shadow" type="submit">Register</button> */}
        </form>
        </div>
     );
}
 
export default Form;