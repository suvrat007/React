import React from "react";
import ReactDOM from "react-dom";

// const jsxHeader = <h1 id="root">namaste vro</h1>;


// const duntion = () => <><h1>react</h1>
// <h2>reastion</h2></>
// ;


// const fun = () => (
//     <><duntion />
//     <h1>composite funtion</h1></>

// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<duntion/>);

const Hello = () => {
    return <h1>HELLO WORLD</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Hello/>);
