const GroupingsMobile =({meals2}) => {
    return ( 
        <div>
            {meals2[0]==undefined ? <p className="row p-3 m-4 d-flex h2">Nothing for this category. <i className="fas fa-sad-tear w-25 d-flex align-items-center ps-0 pt-1"></i> </p> : meals2.map((meal)=>(
                <div className="item row p-3 m-4 border shadow rounded" key={meal.id}>
                <div className="item-img col-4">
                    <img src="/assets/food/image3.jpg" alt="item-img" className="img-fluid" />
                </div>
                <div className="item-details col-8">
                    <p className="mb-0">{meal.name}</p>
                    <p className="mb-0">{meal.restaurantName}</p>
                    <p className="mb-0">Still good for {meal.dueDate} hrs</p>
                    <div> <p className="mb-0 h3"><s>{meal.price} FCFA</s></p> <p className="h3">{meal.promoPrice} FCFA</p> </div>
                </div>
            </div>
            ))}
            {/* <div className="item row p-3 m-4 border shadow rounded">
                <div className="item-img col-4">
                    <img src="/assets/food/image3.jpg" alt="item-img" className="img-fluid" />
                </div>
                <div className="item-details col-8">
                    <p className="mb-0">Name</p>
                    <p className="mb-0">Restaurant name</p>
                    <p className="mb-0">Still good for</p>
                    <div> <p className="mb-0 h3"><s>2500 FCFA</s></p> <p className="h3">1000 FCFA</p> </div>
                </div>
            </div> */}
        </div>
     );
}
 
export default GroupingsMobile;