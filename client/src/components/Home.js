import React, { useEffect, useState } from 'react'

const Home = () => {


  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
  
  async function homePage() {
    try {
      const res = await fetch('/getdata', {

          headers:{
            "Content-Type": "application/json"
          },
      });
  
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

    } catch (error) {
      console.log(error);
    }
  }
  
   homePage();
   
  },[]);

  

  return (
    <>

    <div className='home-page'>
    <div className='home-div'>
        <p className='pt-5'>WELCOME</p>
        <h1>{userName}</h1>
        <h2>{show ? 'Wishing You a Many Many Happy Moments Comes in Life ..!!' : "Let's Explore it."}</h2>
    </div>
    </div>



    </>
  )
}

export default Home