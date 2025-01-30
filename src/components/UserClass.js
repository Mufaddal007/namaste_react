import React from "react"; 
class UserClass extends React.Component{ 
    constructor(props){
        super(props); 
        this.state = {
         count : 10, 
         count1 : 20
        }

    }
    render(){
        return (
            <div>This is class component
                <h1>{this.props.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count+1
                    })
                }}>Increment</button>
            </div>
            
        )  
    }
}

export  default UserClass