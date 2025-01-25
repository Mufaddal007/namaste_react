import CardComponent from "./CardComponent";
import { useState } from "react";
import { resList } from "../Utils/dummyData";




const BodyComponent = () => {
    let [resListFiltered, setresListFiltered] = useState(resList); 
    return (
        <div className="body">
            <button id="btn" onClick={
                () => {
                    setresListFiltered(resList.filter((resObj)=> {
                        return (resObj.info.avgRating > 4)
                    }))
                }
            }>Filer Restaurents</button>
            {
            resListFiltered.map( resData => {
                return <CardComponent key={resData.info.id} resData = {resData} />         
            })
        }
          
        </div>
    )
}



export default BodyComponent