import { LOGO_URL } from "../utility/constants";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Header = () =>{
    const [btnNameReact, setBtnNameReact] = useState("LogIn");
    console.log("header called");

    // useEffect is called everytime after header is rendered
    // if depedency array is empty = [] => useEffects is only called once
    // something is there in dependecy.. its only called when dependecy changes
    useEffect(() => {
        console.log("header called");
    }, []);
    // let BtnName = "Log In";
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>


                    <button className="login" onClick={() => {
                        btnNameReact==="LogIn" ? setBtnNameReact("LogOut") : setBtnNameReact("LogIn");
                    }}>{btnNameReact}</button>

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