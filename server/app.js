require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');

connectDB(); // Database connection establish.

app.use(express.json());


// we link the router files to make our router easy.
app.use(require('./router/auth')); 





// Middleware

// const middleware = (req,res, next)=>{
//     console.log("Hello my Middleware");
//     next();
// }




//............................

// Routes for Searching .. 

// app.get('/' , (req , res)=>{
//     res.send("Hello World from the App js ..!!");
// });


// app.get('/contact' , (req , res)=>{
//     res.cookie('jwtoken' , 'Nitin Cookie is created')
//     res.send("Hello Contact Me from the Server ..!!");
// });

app.get('/signup' , (req , res)=>{
    res.send("Hello Registered Me from the Server ..!!");
});

app.get('/signin' , (req , res)=>{
    res.send("Hello Login Me from the Server ..!!");
});


// step 3: Netlify 

 

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })


}

// PORT
 
const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`Server is Running on Port ${PORT}`);
});

