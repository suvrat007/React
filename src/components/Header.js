import { LOGO_URL } from "../utility/constants";
import {useState} from "react";

const Header = () =>{
    const [btnNameReact, setBtnNameReact] = useState("LogIn");
    // let BtnName = "Log In";
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                    //react will rerender everything because of useState
                    <button className="login" onClick={() => {
                        btnNameReact==="Log In" ? setBtnNameReact("LogOut") : setBtnNameReact("LogIn");
                    }}>{btnNameReact}</button>


                    // whole header component will be called again and updated value will be used.....ALL COZ OF USESTATE()
                    // bcoz we used setBtnNameReact


                    // btnNameReact variable will be a new variable when header is called again


                    // AKA....RECONCILLIATION PROCESS


                </ul>
            </div>
        </div>
    )
}
export default Header;