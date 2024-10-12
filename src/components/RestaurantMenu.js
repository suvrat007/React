import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API} from "../utility/constants";
import useRestaurantMenu from "../utility/useRestaurantMenu";

const RestaurantMenu=()=>{
    const [restInfo ,setRestInfo] = useState([]);

    const {resId} = useParams();
    // console.log(params);
    setRestInfo( useRestaurantMenu(resId));

    if (restInfo===null) return <Shimmer />;

    const{ name,costForTwoMessage,cuisines}=restInfo.cards[2].card.card.info;

    const{itemCards}=restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{costForTwoMessage}</p>
            <h3>{cuisines.join(", ")}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((items) => (
                    <li key={info.card.info.id}> {items.card.info.name} - {items.card.info.price / 100 || items.card.info.defaultPrice / 100}</li>
                ))}

            </ul>
        </div>
    )
};

export default RestaurantMenu;