import React from "react";
import ReactDOM from "react-dom/client";

// React Element 

const  heading = <h1> helo world </h1> ; 


// React component 
const HeadingComponent = () => {
        
        return  (<div>
            <Title />
            <h1> functional component </h1>; 
        </div> )
}
const root = ReactDOM.createRoot(document.getElementById("root")); 


const Title = () => {
    return <h1>
        Namaste react using Jsx title
    </h1>
}

// Rending a component inside html
root.render(<HeadingComponent />); 