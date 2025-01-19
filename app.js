const root = ReactDOM.createRoot(document.getElementById("root"))

const parent = React.createElement("div", {}, 
   [
    React.createElement("div", {}, 
        [ 
         React.createElement("h1", {}, "I am an h1 tag"), 
         React.createElement("h2", {}, "I am an h2 tag")
        ]),

        React.createElement("div", {}, 
            [ 
             React.createElement("h1", {}, "I am an h1 tag"), 
             React.createElement("h2", {}, "I am an h2 tag")
            ]  )

   ]    
    )
 

root.render(parent);

