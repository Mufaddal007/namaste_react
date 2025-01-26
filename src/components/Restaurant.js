import { useEffect, useState } from "react";
import {useParams} from "react-router"
import Shimmer from "./Shimmer";
import { fetchRestaurantData } from "../Utils/constants";
const Restaurant = () => {
    let [restaurantData, setRestaurantData] = useState([]); 
    let [restaurantCompleteData, setRestaurantCompleteData] = useState({}); 
    const {resId} = useParams(); 
    console.log(resId);

    const fetchData  = async ()=> {
        const data = await fetch(fetchRestaurantData+resId);
        const temp = await data.json(); 


        setRestaurantData(temp.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards); 
        setRestaurantCompleteData(temp.data); 
        console.log(temp.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards); 
        console.log(restaurantCompleteData); 
        
    }
    useEffect(()=> {
        fetchData(); 
    }, [])


    if(restaurantData == [] || restaurantCompleteData == {}){
        return <Shimmer />
    }

    

return (
    <div>
            {
                restaurantData.map((menuItem) => {
                    return <h3 key="menuItem">{menuItem.card.info.name}</h3>
                })
            }
    </div>
)
}

export default Restaurant; 