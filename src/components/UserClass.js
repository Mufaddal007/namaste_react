import React from "react"; 
class UserClass extends React.Component{ 
    constructor(props){
        super(props); 
    }
    render(){
        return (
            <div>This is class component
                <h1>{this.props.name}</h1>
            </div>
            
        )  
    }
}

export  default UserClass