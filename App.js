import React from "react";
import ReactDOM from "react-dom";

const header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.pngitem.com/middle/iJRRoo_delivery-logo-food-delivery-service-hd-png-download/"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const AppLayout = () =>{
    return <div className="app">
        <header />
    </div>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
