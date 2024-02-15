const Hero = () => {
    return ( 
        <div className="hero shadow mb-4">
            <div className="hero-contents-desktop row d-md-flex d-none">
                <div className="hero-left col-7">
                    <h1 className="hero-heading display-4">Let's fight food waste together</h1>
                    <p className="h5 hero-p">Food waste is a big problem in our community and we can help to minimize it. FudRow is a platform that helps you rescue 
                      unsold food at your favorite rstaurants at discounted prices.</p><p className="h5 hero-p">On our platform you can explore restaurnants/bakeries/supermarkets 
                      far and near and save surplus food from going to waste at a great price. <a href="#categories" className="a-link">See what's available</a>
                    </p>
                </div>
                <div className="hero-right col-4 offset-1">
                    <img src="/assets/img/logo-color.png" alt="hero-img" className="img-fluid shadow" />
                </div>
            </div>
            <div className="hero-contents-mobile d-md-none">
                <div className="hero-contents-mobile-c w-100">
                    <div className="h-25 d-flex align-items-baseline hero-logo-mobile justify-content-center">
                        <img src="/assets/img/logo-no-background.png" alt="logo" className="img-fluid mt-4" />
                    </div>
                    <div className="h-50 d-flex align-items-end">
                        <h1 className="hero-heading px-2 display-3 h-50  ml-1">Let's fight food waste together</h1>
                    </div>
                    <div className="h-25 d-block align-items-baseline justify-content-center ps-5">
                        <button className="btn btn-custom w-75 ms-3 my-1" style={{borderRadius:'25px'}}> <a href="#navmenu"> See what's available</a></button>
                        <button className="btn btn-custom w-75 ms-3 my-1" style={{borderRadius:'25px'}}> <a href="#" onClick={(e)=>{e.preventDefault()}}> Buy a meal for someone</a></button>
                    </div>
                    {/* <h1 className="hero-heading px-2 display-3 h-50  ml-1">Let's fight food waste together</h1> */}
                    {/* <button className="btn btn-danger h-25">See what's available</button> */}
                </div>
            </div>
        </div>
     );
}
 
export default Hero;