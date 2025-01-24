import CardComponent from "./CardComponent";

import { resList } from "../Utils/dummyData";




const BodyComponent = () => {
    return (
        <div className="body">
            {
            resList.map( resData => {
                return <CardComponent key={resData.info.id} resData = {resData} />         
            })
        }
          
        </div>
    )
}

export default BodyComponent