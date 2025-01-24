import { imgStaticUrl } from "../Utils/constants";

const CardComponent = (props) => {
    const {resData} = props;
    const {info}  = resData;  
    const {name, cloudinaryImageId, avgRating} = info; 
    return (
        <div className="card">
            <img className="cardImage" src={imgStaticUrl+cloudinaryImageId} />
            <span className="cardContent">{name}</span>
            <span  className="cardContent">{avgRating}</span>
        </div>
    )
}

export default CardComponent