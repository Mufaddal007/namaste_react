import CardComponent from "./CardComponent";
import { useContext, useState } from "react";
import { resList } from "../Utils/dummyData";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { fetchRestaruants } from "../Utils/constants";
import {Link} from "react-router"
import UserContext from "../Utils/UserContext";

const BodyComponent = () => {
    let [resListFiltered, setresListFiltered] = useState([]); 
    let [searchInput, setSearchInput] = useState("")

    const {loggedInUserName, setUserName} =  useContext(UserContext); 

    useEffect(() => {
        fetchData()
    }, [searchInput] )

    let fetchData =  async ()=> {
        const data = await fetch(
            fetchRestaruants
        )
        console.log(data); 
        const temp = await data.json(); 
       
        //console.log(temp.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
     setresListFiltered(temp.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     console.log('temp ', resListFiltered) ;
    }


    if( resListFiltered.length==0 ) {
        return (
            <div>
                <Shimmer />
            </div>
        )
    }
    console.log(resListFiltered) 
    return (
        <div>
            <button className="flex" 
            onClick={
                () => {
                    setresListFiltered(resList.filter((resObj)=> {
                        return (resObj.info.avgRating > 4)
                    }))
                }
            }>Top Rated Restaurants</button>
            <input type="text" className="border border-solid border-purple-50"  value={searchInput} onChange={(e) => {
                setSearchInput(e.target.value)
            }} />
            <button onClick={()=>{
                setresListFiltered(resList.filter((restaurantObj)=> restaurantObj.info.name.toLowerCase().includes(searchInput.toLocaleLowerCase()))); 
            }}>Search</button>
            <span>
                <label for="userName">User Name : </label>
                <input id="userName"  className="m-2 p-2 border border-black" type="text" onChange={(e)=>{setUserName(e.target.value)}} />
            </span>
            <div className="flex">
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