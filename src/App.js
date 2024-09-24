import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)



const AppLayout = () =>{
    return( <div className="app">
        <Header />
        <Outlet />
    </div>);
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
                path: "/restaurant/:resId", //colon (:) makes it dynamic
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
