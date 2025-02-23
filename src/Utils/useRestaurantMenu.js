import {userState} from "react"
import {MenuUrl} from "../Utils/constants"
const useRestaurantMenu =  (resId) => {
    const [resInfo, setRestInfo] = userState([]); 
    userEffect(()=> {
        fetchData()
    }, [resInfo])

    const fetchData  = async ()=> {
        const resData = await fetch(MenuUrl+resId); 
        const data = resData.json(); 
        setRestInfo(data.data); 
    }
    return resInfo; 
}
export default useRestaurantInfo; 