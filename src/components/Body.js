import React, {useEffect} from "react";
import resList from "../utility/MockData";
import RestCard from "./RestCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [ListOfRestaurants, SetListOfRestaurants] = useState(resList);
    const [filteredRestaurants, SetFilteredRestaurants] = useState([]);




    // will be called after the component is rendered.
    useEffect(() => {
        console.log('use effect call');
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.73826769999999&lng=77.0822151&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );  // given by the browser


        // data from api
        const json = await data.json();


        //taking data and updating in hook variables.
        SetListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);   //state variable
        SetFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);


        //above not efficient way to write the code....so we do OPTIONAL CHAINING
    };
    // page is first loaded, then code is rendered, then 'useEffect is called' ie API call is made and site is rerendered.


    // when the api is not fetched but the code is rendered display a loading screen ---- CONDITIONAL RENDERING
    // if(ListOfRestaurants.length === 0){
    //     return <h1>Loading.......</h1>;
    // };
    //instead of showing loader....show fake page (called SHIMMER UI)


    const [searchText, setSearchText] = useState("");

    // whenever state variable changes....starts RECONCILLIATION CYCLE
    return ListOfRestaurants.length===0 ? <Shimmer /> :
        (<div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text"
                               className="search-box"
                               value={searchText}
                               onChange={(e) => {
                                   setSearchText(e.target.value)}}/>
                        <button onClick={() =>{
                            console.log(searchText);
                            const filteredRest = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            SetFilteredRestaurants(filteredRest);
                        }}>Search</button>
                    </div>
                </div>
            <div className="search-container">
                <button className="filter-btn" onClick={()=>{
                    const filteredList=ListOfRestaurants.filter(
                        (res)=>res.info.avgRating>4.2
                    );
                    SetFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="rest-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestCard key={restaurant.info.id} resData={restaurant}/>
                ))
                }
            </div>
        </div>
    )
}
export default Body;