import { LOGO_URL } from "../utility/constants";
import {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import UserContext from "../utility/UserContext";

const Header = () =>{
    const [btnNameReact, setBtnNameReact] = useState("LogIn");
    const {loggedInUser} = useContext(UserContext)
    console.log("header called");

    // useEffect is called everytime after header is rendered
    // if depedency array is empty = [] => useEffects is only called once
    // something is there in dependecy.. its only called when dependecy changes
    useEffect(() => {
        console.log("header called");
    }, []);
    // let BtnName = "Log In";
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-amber-200 lg:bg-orange-300">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "U+2705" : "U+1F534"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>


                    <button className="login" onClick={() => {
                        btnNameReact === "LogIn" ? setBtnNameReact("LogOut") : setBtnNameReact("LogIn");
                    }}>{btnNameReact}</button>

                    <li className="px-4 font-bold">{loggedInUser}</li>

                </ul>
            </div>
        </div>
    )
}

//react will rerender everything because of useState

// whole header component will be called again and updated value will be used.....ALL COZ OF USESTATE()
// bcoz we used setBtnNameReact


// btnNameReact variable will be a new variable when header is called again


// AKA....RECONCILLIATION PROCESS


export default Header;