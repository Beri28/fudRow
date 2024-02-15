const Footer = () => {
    return ( 
        <div className="footer p-4 pb-0">
            <div className="row justify-content-around">
                <div className="col d-flex justify-content-center">Home</div>
                <div className="col d-flex justify-content-center">About Us</div>
                <div className="col d-flex justify-content-center">Contact Us</div>
            </div>
            <div className="social-media d-flex justify-content-center my-1">
                <i className="fab fa-facebook px-2"></i>
                <i className="fab fa-twitter px-2"></i>
                <i className="fab fa-instagram px-2"></i>
            </div>
            <hr />
            <div className="row credits mb-0">
                <p className=" d-flex justify-content-center">fudRow @ Copyrights 2024</p>
            </div>
        </div>
     );
}
 
export default Footer;