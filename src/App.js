import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import UserMenu from "./components/UserMenu";
import UserContext from "./utility/UserContext";
import {Provider} from "react-redux";
import appStore from "./utility/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";
// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)



// lazy loading or On demand loading
// it imports grocery on demannd makin stufff faster
const Grocery = () =>{
    import("./components/Grocery");
}

console.log("aara hai ki nahi")

const AppLayout = () =>{
    const[userName , setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Suvrat Mittal"
        }
        setUserName(data.name);
    },[])
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>);
            </UserContext.Provider>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element:<About />
            },
            {
                path: "/contact",
                element:<Contact />
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1> LOADING ... .. .</h1>}><Grocery /> </Suspense>,
            },
            {
                path: "/restaurant/:resId", //colon (:) makes it dynamic
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart/>,
            }
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
