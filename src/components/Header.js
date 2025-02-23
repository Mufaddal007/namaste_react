import {useState} from "react";
import {Link } from "react-router"; 
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
const MenuBar  = () => {
    let [buttonTitle, setButtonTitle] = useState("login");  
    const {loggedInUser} = useContext(UserContext); 
    console.log(loggedInUser); 
    return (
        <div className="items-end">
            <ul className="flex p-4 m-5 bg-green-300 hover:bg-blue-300">
                <li className="p-4 m-5"><Link to="/">Home</Link></li>
                <li className="p-4 m-5"><Link to="/contact">Contact us</Link></li>
                <li className="p-4 m-5"><Link to="/about">About</Link></li>
                <li className="p-4 m-5">Cart</li>
                <li className="p-4 m-5">Profile</li>
                <li className="p4 m-5">{loggedInUser}</li>
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
        <div className="flex justify-between bg-green-300">
            <img  className="w-40" alt="headerLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIW8jF2TNHR77VaecIBawILQL21N9kgldZbg&s/" />
            <MenuBar className="flex"/>
        </div>
    )
}

export default HeaderComponent