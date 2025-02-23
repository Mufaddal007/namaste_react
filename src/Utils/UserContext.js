import { createContext } from "react";     

const UserContext =  createContext({
    loggedInUser : "Some user"
})

export default  UserContext; 