import {useState} from "react";
import {Link } from "react-router"; 

const MenuBar  = () => {
    let [buttonTitle, setButtonTitle] = useState("login");
    return (
        <div className="MenuBar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Cart</li>
                <button onClick={
                    ()=> {
                         setButtonTitle("logout")
                    }
                }>{buttonTitle}</button>
            </ul>
        </div>
    )
}
const HeaderComponent = () => {
    return (
        <div className="header">
            <img  className="headerLogo" alt="headerLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIW8jF2TNHR77VaecIBawILQL21N9kgldZbg&s/" />
            <MenuBar />
        </div>
    )
}

export default HeaderComponent