import { useEffect, useState } from "react";
import GroupingsMobile from "./GroupingsMobile";
import meals from "../assets/meals.json"

const NavMenu = () => {
    const [currentId,setCurrentId]=useState("all")
    const [meals1,setMeals]=useState(meals)
    const [Type,setType]=useState(currentId)
    const handleClick=async(e)=>{
        setCurrentId(e.target.id)
        setType(e.target.id)
    }
    useEffect(()=>{
        if(Type!='all'){
            let meal0=meals 
            setMeals(meal0.filter((item)=>item.type==Type))
        }else{
            setMeals(meals)
        }
    },[currentId])
    return ( 
        <div>
            <div className="row justify-content-between nav-menu" id="navmenu">
            <div className={"col d-flex justify-content-center " + (currentId==='all'?"active":"")} id="all" onClick={(e)=>{handleClick(e)}}>All</div>
            <div className={"col d-flex justify-content-center " + (currentId==='restaurant'?"active":"")} id="restaurant" onClick={(e)=>{handleClick(e)}}>Restaurants</div>
            <div className={"col d-flex justify-content-center " + (currentId==='supermarket'?"active":"")} id="supermarket" onClick={(e)=>{handleClick(e)}}>SuperMarkets</div>
            <div className={"col d-flex justify-content-center " + (currentId==='bakery'?"active":"")} id="bakery" onClick={(e)=>{handleClick(e)}}>Bakeries</div>
        </div>
        <GroupingsMobile  meals2={meals1}/> 
        {/* <GroupingsMobile  meals2={Type==='all'?meals:meals.filter((meal)=>meal.type==Type)}/>  */}
        {/* meals2={Type==='all'?meals:meals.filter((meal)=>meal.type==Type)} */}
        </div>
     );
}
 
export default NavMenu;