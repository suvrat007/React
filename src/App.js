import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";  
  // * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)



const AppLayout = () =>{
    return <div className="app">
        <Header />
        <Body />
    </div>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
