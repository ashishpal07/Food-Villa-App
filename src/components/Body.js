
import { useState } from "react";
import { restaurentList } from "../constants";
import ReastaurentCart from "./ReastaurentCart";
import { useState } from "react";

// in react every component has a state
// what is state
// what is hooks?
// what is useState

const Body = () => {
    // const searchText = "KFC"; This is how we create normal variable with default value
    // searchText is local state variable
    const [searchText, setSearchText] = useState("KFC");  // To create state variables with default value
    const [searchClicked, setSearchClicked] = useState("false");

    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="search" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <h1>{searchClicked}</h1>
                <button 
                className="search-btn" 
                onClick={() => {
                    if(searchClicked === "false") {
                        setSearchClicked("true");
                    } else {
                        setSearchClicked("false");
                    }
                }}>Search</button>
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