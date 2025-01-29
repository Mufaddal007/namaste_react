import CardComponent from "./CardComponent";
import { useState } from "react";
import { resList } from "../Utils/dummyData";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { fetchRestaruants } from "../Utils/constants";
import {Link} from "react-router"

const BodyComponent = () => {
    let [resListFiltered, setresListFiltered] = useState([]); 
    let [searchInput, setSearchInput] = useState("")



    useEffect(() => {
        fetchData()
    }, [searchInput] )

    let fetchData =  async ()=> {
        const data = await fetch(
            fetchRestaruants
        )
        console.log(data); 
        const temp = await data.json(); 
        console.log('temp ', temp) ;
        //console.log(temp.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
     setresListFiltered(temp.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    if( true ) {
        return (
            <div>
                <Shimmer />
            </div>
        )
    }
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
                setresListFiltered(resList.filter((restaurantObj)=> restaurantObj.info.name.toLowerCase().includes(searchInput.toLocaleLowerCase()))); 
            }}>Search</button>
            <div className="cardContainer">
            {

            resListFiltered.map( resData => {
                return <Link to={"/restaurant/"+resData.info.id}> <CardComponent key={resData.info.id} resData = {resData} /></Link>
                
            })
        }
        </div>
          
        </div>
    )
}



export default BodyComponent