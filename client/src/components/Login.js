import React, { useState , useContext } from 'react' 
import loginpic from '../images/login.jpg';
import { NavLink, useNavigate } from 'react-router-dom';

import { UserContext } from '../App';



const LOGIN = () => {

  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const loginUser = async (e) =>{
  e.preventDefault();

  const res = await fetch('/signin',{
    method:"POST",
        headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
          email,password
    })
  });

  const data = res.json();

  if(data.status === 400 || !data){
    window.alert("Invalid Credentials");
    console.log("Invalid Registration");
  }else{
    dispatch({type:"USER" , payload:true});
    window.alert("Login Sucessful");
    console.log("Sucessfull Registration");
    navigate("/");
  }


}


  return (
  <>
   <section className='signin'>

<div className='container mt-5'>  

  <div className='signin-content'>

  <div className='signin-image'>
              <figure>
                <img src={loginpic} alt="Login"/>
              </figure>
              <NavLink to='/signup' className='logis'>Create an Account.</NavLink>
     </div>

        <div className='signin-form'>

           <h2 className='form-title'>Sign In</h2>

           <form method='POST' className='login-form' id='login-form'>


                          <div className='form-group'>
                              <label htmlFor='email'>
                              <i class="zmdi zmdi-email material-icons-name"></i>
                              </label>
                              <input type="email" name="email" class="email" id="email" autoComplete='off'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder='Your email' />
                          </div>

                          <div className='form-group'>
                              <label htmlFor='password'>
                              <i class="zmdi zmdi-lock material-icons-name"></i>
                              </label>
                              <input type="password" name="password" class="password" id="password" autoComplete='off'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder='Your password' />
                          </div>


                          <div className='form-group form-button'>
                              <input type="submit" class="signin" id="signin" className='form-submit'
                              value='Login' 
                              onClick={loginUser}/>
                          </div>

           </form>

        </div>


            
  </div>

</div>

</section>
  
  </>
  )
}

export default LOGIN