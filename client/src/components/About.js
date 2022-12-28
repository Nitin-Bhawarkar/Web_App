import React, {useEffect, useState} from 'react'; 
import nitinpic from '../images/nitin.jpg';
// import aboutpic from '../images/aboutpic.jpg';
import {useNavigate} from 'react-router-dom';

const About = () => {

const navigate = useNavigate();



const [userData, setUserData] = useState({});

useEffect(() => {

async function callAboutPage() {
  try {
    const res = await fetch('/about', {
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
    });

    const data = await res.json();
    setUserData(data);

    if(!res.status === 200){
      const error = new Error(res.error);
      throw error;
    }

  } catch (error) {
    console.log(error);
    navigate('/login');
  }
}

 callAboutPage();
 
},[]);



  return (
    <>
  <div className='emp-profile'>
         <div className='container'>
          <form method='GET'>
            <div className='row'>

              <div className='col-md-3'>
                {/* <img src={userData.name === "Saurabh"? nitinpic : aboutpic} alt="nitinpic" />  */}
                <img src={nitinpic} alt="nitinpic" />
              </div>

              <div className='col-md-6'>
               <div className='profile-head'>
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS: <span>1/10</span></p>

                      <ul className="nav nav-tabs" role='tablist'>

                            <li className="nav-item">
                              <a className="nav-link active" id='home-tab' data-bs-toggle='tab' href="#home" role='tab'>About</a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" id='profile-tab' data-bs-toggle='tab' href="#profile" role='tab'>Timeline</a>
                            </li>
                          
                        </ul>
                 
               </div>
              </div>

            <div className='col-md-3'>
              <input className='profile-edit-btn' name='btnAddMore' value='Edit Profile' />
            </div>

        </div>

<div className='row'>
  {/* left side url */}

  <div className='col-md-3'>
    <div className='profile-work'>
    <p>WORK LINK</p>
    <a href='https://www.youtube.com/@ThapaTechnical'>YouTube</a> <br/>
    <a href='https://twitter.com/BhawarkarNitin'>Twitter</a> <br/>
    <a href='https://www.linkedin.com/in/nitinbhawarkar14jan/'>LinkedIN</a> <br/>
    <a href='https://github.com/Nitin-Bhawarkar'>GitHub</a> <br/>
    </div>


  </div>

  {/* Right side url */}

  <div className='col-md-9 pl-6 about-info'>
      <div className='tab-content profile-tab' id='myTabContent'>

        <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>

                            <div className='row'>
                              <div className='col-md-6'>
                            <label>User ID</label>
                              </div>

                              <div className='col-md-6'>
                              <p>965132167981651</p>
                              </div>
                            </div>

                              <div className='row'>
                                <div className='col-md-6'>
                                <label>name</label>
                                </div>

                                <div className='col-md-6'>
                                <p>{userData.name}</p>
                                </div>
                              </div>

                              <div className='row'>
                                <div className='col-md-6'>
                                <label>email</label>
                                </div>

                                <div className='col-md-6'>
                                <p>{userData.email}</p>
                                </div>
                              </div>

                              <div className='row'>
                                <div className='col-md-6'>
                                <label>phone</label>
                                </div>

                                <div className='col-md-6'>
                                <p>{userData.phone}</p>
                                </div>
                              </div>

                              <div className='row'>
                                <div className='col-md-6'>
                                <label>profession</label>
                                </div>

                                <div className='col-md-6'>
                                <p>{userData.work}</p>
                                </div>
                              </div>

          </div>

      <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>

                        <div className='row'>
                          <div className='col-md-6'>
                                  <label>Experience</label>
                                  </div>

                                  <div className='col-md-6'>
                                  <p>Expert</p>
                                  </div>
                        </div>

                        <div className='row'>
                          <div className='col-md-6'>
                                  <label>Hourly Rate</label>
                                  </div>

                                  <div className='col-md-6'>
                                  <p>10$/hr</p>
                                  </div>
                        </div>

                        <div className='row'>
                          <div className='col-md-6'>
                                  <label>Total Projects</label>
                                  </div>

                                  <div className='col-md-6'>
                                  <p>20</p>
                                  </div>
                        </div>


                        <div className='row'>
                          <div className='col-md-6'>
                                  <label>English Level</label>
                                  </div>

                                  <div className='col-md-6'>
                                  <p>Proficient</p>
                                  </div>
                        </div>

                        <div className='row'>
                          <div className='col-md-6'>
                                  <label>Availablity</label>
                                  </div>

                                  <div className='col-md-6'>
                                  <p>6 Months</p>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
       </form>   
   </div> 
</div>

    </>
  )
}

export default About