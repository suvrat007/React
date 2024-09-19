import resList from "../utility/MockData";
import RestCard from "./RestCard";
import {useEffect, useState} from "react";
import shimmer from "./Shimmer";

const Body = () => {

    const [ListOfRestaurants, SetListOfRestaurants] = useState(resList);
    const [filteredRestaurants, SetFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");


    // will be called after the component is rendered.
    useEffect(() => {
        console.log('use effect call');
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://analytics.swiggy.com/message-set"
        );  // given by the browser


        // data from api
        const json = await data.json();


        //taking data and updating in hook variables.
        SetListOfRestaurants(json.data.cards[2].data.data.cards);   //state variable
        SetFilteredRestaurants(json.data.cards[2].data.data.cards);


        //above not efficient way to write the code....so we do OPTIONAL CHAINING
    };
    // page is first loaded, then code is rendered, then 'useEffect is called' ie API call is made and site is rerendered.


    // when the api is not fetched but the code is rendered display a loading screen ---- CONDITIONAL RENDERING
    if(ListOfRestaurants.length === 0){
        return <h1>Loading.......</h1>;
    };
    //instead of showing loader....show fake page (called SHIMMER UI)



    // whenever state variable changes....starts RECONCILLIATION CYCLE
    return ListOfRestaurants.length===0 ? (<Shimmer />) :
        (<div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text"
                               className={search-box}
                               value={searchText}
                               onChange={(e) => {
                                   setSearchText(e.target.value)}}/>
                        <button onClick={() =>{
                            console.log(searchText);

                            const filteredRest = ListOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));

                            SetListOfRestaurants(filteredRest);
                        }}>Search</button>
                    </div>
                </div>
            <div className="search-container">
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList=ListOfRestaurants.filter(
                        (res)=>res.data.avgRating>4
                    );
                    SetFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>            
            <div className="rest-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;