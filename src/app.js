import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import BodyComponent from "./components/body";
import {createBrowserRouter, Route, RouterProvider } from "react-router"; 
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error"; 

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));



const ApplicaitonLayout  = ()  => {
    return (
        <div className="applicationLayout">
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    )
}






const routerConfig = createBrowserRouter([
    {path:"/", element: <ApplicaitonLayout />, errorElement: <Error />}, 
    {path:"/about", element: <About />}, 
    {path:"/contact", element: <Contact></Contact>}
])



/*  
name
cloudinaryImageId
avgRating
*/



reactRoot.render(<RouterProvider router={routerConfig} />)

//reactRoot.render(<ApplicaitonLayout />); 