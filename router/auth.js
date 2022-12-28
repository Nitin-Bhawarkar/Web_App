const express = require('express');
const router = express.Router();
const cookieParser = require("cookie-parser");
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

router.use(cookieParser());

const User = require('../models/userSchema');



//------------------------------------------------------

router.get('/' , (req , res)=>{
    res.send("Hello World from the Router js ..!!");
});

//--------------------------------------------------------------

/*  Using Promises to create new registered user

router.post('/register', (req, res)=>{

    const { name , email , phone , work , password , cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).json({ error: "Please Enter all required fields ..!!"});
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error: 'Email already registered'});
        }

        const user = new User({name , email , phone , work , password , cpassword})

        user.save().then(()=>{
            res.status(201).json({message:"User registered Sucessfully"});
        }).catch((error)=> res.status(500).json({error:"Failed to registered."}))

    }).catch(err => {console.log(err);   });

    //res.json({message:req.body});
});

router.get('/' , (req , res)=>{
    res.send("Hello World from the Router js ..!!");
});

*/
//--------------------------------------------------------------

// Registration 

// Using Async await

router.post('/register', async (req, res)=>{

    const { name , email , phone , work , password , cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
       return res.status(422).json({ error: "Please Enter all required fields ..!!"});
    }

    try {
        
        const userExist = await User.findOne({email:email});
    
            if(userExist){
             return res.status(422).json({error: 'Email Already Registered'});
            
            } else if(password != cpassword){
                return res.status(422).json({error: 'Password not matching.'});
            }else{
    
            const user = new User({name , email , phone , work , password , cpassword});

    // Write in Two Apporach :- 1st

        //     await user.save();
    
        //    res.status(201).json({message:"User registered Sucessfully"});

    // Write in Two Apporach :- 2nd
            
          
   const userRegister = await user.save(); // Iss method ke pahle pasword hash ho jana chahiye.

    if(userRegister){
           res.status(201).json({message:"User registered Sucessfully"});
    }else{
        res.status(500).json({error:"Failed to Register"});

    }   

}

    } catch (error) {
        console.log(error);
    }

    //res.json({message:req.body});
});


// ---------------------------------------------------

// Log in

router.post('/signin', async(req, res)=>{

    try {
        let token;
    const { email , password } = req.body;

    if(!email || !password){
       return res.status(400).json({ error: "Please Enter all required fields ..!!"});
    }

        const userLogin = await User.findOne({email:email });


        if(userLogin){

            token = await userLogin.generateAuthToken();

        // Cookie

        res.cookie('jwtoken' , token,{
            expires: new Date(Date.now() + 258920000),
            httpOnly:true
        });
          
            const isMatch = await bcrypt.compare(password , userLogin.password);

            if(isMatch){
                return res.json({message: 'Login Sucessful' });
            }else{
                return res.status(400).json({error: 'Invalid Credentials Pass'});
            }

        }
        else{
            return res.status(400).json({error: 'Invalid Credentials Email'});

        }
      
    } catch (error) {
        console.log(error);
    }
})

// About Us Page Here.

router.get('/about' , authenticate , (req , res)=>{
    console.log("Hello my About");
 
     res.send(req.rootUser);
 });
 
// Get Data Page Here.

router.get('/getdata' , authenticate , (req , res)=>{
    console.log("Hello my About");
 
     res.send(req.rootUser);
 });

// Contact Us Page.

 router.post('/contact' , authenticate , async (req , res)=>{
    // res.cookie('jwtoken' , 'Nitin Cookie is created')
  
    try {
        
        const { name, email, phone,message} = req.body;

        if(!name || !email || !phone || !message){
            console.log("Error in contact form");
            return res.json({ error : "Plzz filled the contact form"});
        }

        const userContact = await User.findOne({_id:req.userId});

        if(userContact){
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({message: "user contact sucessfully"})
        }

    } catch (error) {
        console.log(error);
    }

});
 //  Logout ka Page

router.get('/logout' , authenticate , (req , res)=>{
    console.log("Hello my Logout page");
    res.clearCookie('jwtoken' , {path:'/'})
 
     res.status(200).send(" User Logout");
 });




module.exports = router;








