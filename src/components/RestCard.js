    import { CDN_URL } from "../utility/constants";

const cardStyle = {
    backgroundColor: "#f0f0f0", 
}

const RestCard= (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
      } = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400 bg-gray-100" >
            <img className="rounded-lg"
            // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/6aa38b251b1ee1662961a6dc19e41e95"
            src={CDN_URL + cloudinaryImageId}>

            </img>
            <h3 className="font-bold py-4 text-xl ">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>Rs.{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestCard;