import Groupings from "./Groupings";
import { useEffect,useState } from "react";
import NavMenu from "./NavMenu";
import GroupingsMobile from "./GroupingsMobile";
import Hero from "./Hero";
import BelowHero from "./BelowHero";

const Home = () => {
    return ( 
        <div>
            <Hero />
            <BelowHero />
            <div id="categories">
                    <div className="d-md-block d-none">
                        <Groupings groupName={"Restaurants"} />
                        <Groupings groupName={"Supermarket"} />
                        <Groupings groupName={"Bakeries"} />
                    </div>
                    <div className="d-md-none">
                        <NavMenu />
                    </div>
            </div>
        </div>    
     );
}
 
export default Home;