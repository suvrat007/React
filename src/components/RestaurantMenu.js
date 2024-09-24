import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const [restInfo ,setRestInfo] = useState();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    }


    const{name,costForTwoMessage,cuisines}=restInfo.data.cards[2].card.card.info

    // const{itemCards} =


    if (restInfo===null) return <Shimmer />;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{costForTwoMessage}</p>
            <h3>{cuisines.join(", ")}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((items)=>(
                    <li key={info.card.info.id}>{info.card.info.name} - {info.card.info.price/100 || info.card.info.defaultPrice/100}</li>
                ))}
                <li className="menu-item">Burger</li>
                <li className="menu-item">Pizza</li>
                <li className="menu-item">Pasta</li>

            </ul>
        </div>
    )
};

export default RestaurantMenu;