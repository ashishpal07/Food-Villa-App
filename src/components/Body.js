
import { restaurentList } from "../constants";
import ReastaurentCart from "./ReastaurentCart";

const Body = () => {
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search" value="" />
                <button className="search-btn">Search</button>
            </div>

            <div className="restaurent-list">
                {
                    restaurentList.map((restaurent) => {
                        return <ReastaurentCart {...restaurent.data} key={restaurent.data.id} />
                    })
                }
            </div>
        </>
    );
};

export default Body;