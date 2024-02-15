import restaurants from '../assets/restaurants.json'
const Groupings = ({groupName}) => {
    return ( 
        <>  
            <div className="px-md-5 px-3 mb-5">
                <div className="top row d-flex justify-content-between">
                    <h3 className="col-md-3 col group-name">{groupName}</h3>
                    <h6 className="col-md-3 col d-flex justify-content-end align-items-center"><a href="#">View All <i className="fas fa-arrow-right"></i></a></h6>
                </div>
                <div className="row d-flex justify-content-between px-2 bottom">
                    {restaurants.map((item)=>(
                        <div className="col-3 border p-0 h-100" key={item.id}>
                            <div className="rest-img">
                                <img src={item.image} alt="restaurant-img" className="img-fluid w-100" />
                            </div>
                            <div className="rest-info w-100 p-md-3">
                                <p>{item.name}</p>
                                <p>Avalaible meals {item.meals}</p>
                                <p className=""><a href="" className='a-link'>View more <i className='fas fa-arrow-right fa-sm' style={{color:"inherit"}}></i></a></p>
                            </div>
                        </div>
                    ))}
                    {/* <div className="col-3 border p-0 h-100">
                        <div className="rest-img">
                            <img src="/assets/img/logo-white.png" alt="restaurant-img" className="img-fluid w-100" />
                        </div>
                        <div className="rest-info w-100 p-md-3">
                            <p>Name</p>
                            <p>Avalaible meals(23)</p>
                            <p className="">View more</p>
                        </div>
                    </div>
                    <div className="col-3 border p-0 h-100">
                        <div className="rest-img">
                            <img src="/assets/img/logo-white.png" alt="restaurant-img" className="img-fluid w-100" />
                        </div>
                        <div className="rest-info w-100 p-md-3">
                            <p>Name</p>
                            <p>Avalaible meals(23)</p>
                            <p className="">View more</p>
                        </div>
                    </div>
                    <div className="col-3 border p-0 h-100">
                        <div className="rest-img">
                            <img src="/assets/img/logo-white.png" alt="restaurant-img" className="img-fluid w-100" />
                        </div>
                        <div className="rest-info w-100 p-md-3">
                            <p>Name</p>
                            <p>Avalaible meals(23)</p>
                            <p className="">View more</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
     );
}
 
export default Groupings;