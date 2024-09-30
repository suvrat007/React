import {useState} from "react";

const User = () =>{

    // in state variable useEffect we can put return state ment to unmount

    // useState in a function based component
    const[count,setCount] = useState(0);
    const[count1] = useState(1);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count1: {count1}</h1>
            <h2>Name: Me</h2>
            <h3>Location: dilli</h3>
            <h4>Email: dilli@gmail.com</h4>

        </div>
    )


    // never compare react class based companent life cycle to funtional component
};
export default User;