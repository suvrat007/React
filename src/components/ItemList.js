import {CDN_URL} from "../utility/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utility/cartSlice";

const ItemList = ({items}) => {
    // console.log("items list");
    // console.log(items);

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    }
    return (
        <div >
            <ul>
                {items.map((item) => (
                    <div key={item?.card?.info?.id} className=" p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between">

                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item?.card?.info?.name}</span>
                                <span> - ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                            </div>
                            <p className="p-2 text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12">
                            <div className="absolute">
                                <button className="bg-white w-20 mx-16 rounded-lg py-2 px-1 shadow-lg absolute"
                                onClick={() => handleAddItem(item)}> Add +</button>
                            </div>
                            <img src={CDN_URL + item?.card?.info?.imageId}
                                 className="max-w-40 max-h-30 p-4 rounded-lg"/>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;