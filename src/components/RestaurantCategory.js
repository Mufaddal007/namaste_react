import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({category})  =>  {
    let    title =  category.card.card.title; 
    let items = category.card.card.itemCards; 
    let [showItemList, setShowItemList] = useState(false); 
    const toggleShowItemList = () => {
        console.log('toggle function called'+showItemList); 
        setShowItemList(!showItemList); 
    }
    return (
        <div className="text-center">
            <div className="fond-weight: 300" onClick={toggleShowItemList}>{title} </div>
            <div className>
                {
                    items.map((item) => {
                        return showItemList && <ItemList itemsInRestaurant= {item}/>
                    })
                }
            </div>
        </div>
    )
}

export  default RestaurantCategory