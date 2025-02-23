import { useEffect, useState } from "react";
import {useParams} from "react-router"
import Shimmer from "./Shimmer";
import { fetchRestaurantData } from "../Utils/constants";
import RestaurantCategory from "./RestaurantCategory";
const Restaurant = () => {
    let [restaurantData, setRestaurantData] = useState([]); 
    let [restaurantCompleteData, setRestaurantCompleteData] = useState({}); 
    let [foodCategories, setFoodCategories] = useState([]); 
    const {resId} = useParams(); 
    console.log(resId);

    const fetchData  = async ()=> {
        const data = await fetch(fetchRestaurantData+resId);
        const temp = await data.json(); 
        const categories = temp.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((card)=>card?.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' ) ;

        console.log(categories);
        
        setFoodCategories(categories)

        // setRestaurantData(temp.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards); 
        // setRestaurantCompleteData(temp.data); 
        // console.log(temp.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards); 
        // console.log(restaurantCompleteData); 
        
    }
    useEffect(()=> {
        fetchData(); 
    }, [])


    if( foodCategories == [] || foodCategories == {}){
        return <Shimmer />
    }

    

return (
    <div>
            {
                foodCategories.map((category) => {
                    return <RestaurantCategory category= {category} />
                })
            }
    </div>
)
}

export default Restaurant; 