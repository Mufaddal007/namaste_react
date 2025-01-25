import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import BodyComponent from "./components/body";

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));


/*  
name
cloudinaryImageId
avgRating
*/



const ApplicaitonLayout  = ()  => {
        return (
            <div className="applicationLayout">
                <HeaderComponent />
                <BodyComponent />
                <FooterComponent />
            </div>
        )
}



reactRoot.render(<ApplicaitonLayout />); 