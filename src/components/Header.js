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
            <img  className="headerLogo" alt="headerLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIW8jF2TNHR77VaecIBawILQL21N9kgldZbg&s/" />
            <MenuBar />
        </div>
    )
}

export default HeaderComponent