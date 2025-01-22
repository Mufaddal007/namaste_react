import React from "react";
import ReactDOM from "react-dom/client";



const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

const MenuBar  = () => {
    return (
        <div className="MenuBar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}
const HeaderComponent = () => {
    return (
        <div className="header">
            <img alt="headerLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIW8jF2TNHR77VaecIBawILQL21N9kgldZbg&s" />
            <MenuBar />
        </div>
    )
}


const FooterComponent = () => {
    return (
        <div className="footer">
            This is footer
        </div>
    )
}

const CardComponent = () => {
    return (
        <div className="card">
            Meghana Foods
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="body">
           <CardComponent  />
        </div>
    )
}


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