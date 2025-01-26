import CardComponent from "./CardComponent";
import { useState } from "react";
import { resList } from "../Utils/dummyData";
import { useEffect } from "react";
import Shimmer from "./Shimmer";


const BodyComponent = () => {
    let [resListFiltered, setresListFiltered] = useState(resList); 
    let [searchInput, setSearchInput] = useState("")


    useEffect(() => {
        fetchData()
    }, [] )

    let fetchData =  async ()=> {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        console.log(data); 
        const temp = await data.json(); 
        console.log('temp ', temp) ;
        //console.log(temp.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
       // setresListFiltered(temp.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    // if(resListFiltered.length == 0 ) {
    //     return (
    //         <div>
    //             <Shimmer />
    //         </div>
    //     )
    // }
    console.log(resListFiltered) 
    return (
        <div className="body">
            <button onClick={
                () => {
                    setresListFiltered(resList.filter((resObj)=> {
                        return (resObj.info.avgRating > 4)
                    }))
                }
            }>Top Rated Restaurants</button>
            <input type="text"  value={searchInput} onChange={(e) => {
                setSearchInput(e.target.value)
            }} />
            <button onClick={()=>{
                setresListFiltered(resList.filter((restaurantObj)=> restaurantObj.info.name.includes(searchInput))); 
            }}>Search</button>
            <div className="cardContainer">
            {

            resListFiltered.map( resData => {
                return <CardComponent key={resData.info.id} resData = {resData} />         
            })
        }
        </div>
          
        </div>
    )
}



export default BodyComponent