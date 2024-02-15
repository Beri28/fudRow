const BelowHero = () => {
    return ( 
        <div className="my-5">
           <div className="row px-md-5 px-4 mb-3 border-bottom">
                <div className="col-md-6 col-5">
                    <h2>Feeling hungry?<i className="fas fa-frown  ms-2" style={{fontSize:"xx-large"}}></i></h2>
                </div>
                <div className="col-md-6 col-7 ps-md-5">
                    <div className="d-flex mb-2"> <i className="fas fa-hands-helping d-flex align-items-center me-2" style={{fontSize:"xx-large"}}></i><p className="mb-0 ms-2">Rescue good food from restaurants</p></div>
                    <div className="d-flex mb-2"> <i className="fas fa-smile-beam d-flex align-items-center me-3" style={{fontSize:"xx-large"}}></i><p className="mb-0 ms-2">Enjoy for half of the price or less</p></div>
                    <div className="d-flex mb-2"> <i className="fas fa-globe-africa d-flex align-items-center me-3" style={{fontSize:"xx-large"}}></i><p className="mb-0 ms-2">Help the planet by preventing waste</p></div>
                </div>
           </div>
           <div className="row px-md-5 px-4 mb-3">
                <div className="col-md-6 col-5">
                    <h2>Unsold food at the end of the day? <i className="fas fa-sad-tear" style={{fontSize:"xx-large"}}></i></h2>
                    <h6><a href="/register" className="a-link">Register with us</a> </h6>
                </div>
                <div className="col-md-6 col-7 ps-md-5">
                    <div className="d-flex mb-2"> <i className="fas fa-hands-helping d-flex align-items-center me-2" style={{fontSize:"xx-large"}}></i><p className="mb-0 ms-2">Turn surplus food into extra income</p></div>
                    <div className="d-flex mb-2"> <i className="fas fa-hand-peace d-flex align-items-center me-3" style={{fontSize:"xx-large"}}></i><p className="mb-0 ms-2">Increase visibility and attract more customers</p></div>
                    <div className="d-flex mb-2"> <i className="fas fa-seedling d-flex align-items-center me-3" style={{fontSize:"xx-large"}}></i><p className="mb-0 ms-2">Reduce waste and help the environment</p></div>
                </div>
           </div> 
        </div>
     );
}
 
export default BelowHero;