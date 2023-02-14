
import { IMG_CND_URL } from "../constants";

const ReastaurentCart = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return (
        <div className="card">
            <img alt="card image" src={ IMG_CND_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>
        </div>
    )
};

export default ReastaurentCart;