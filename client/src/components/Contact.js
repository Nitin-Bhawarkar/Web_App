import React , {useEffect, useState} from 'react'; 
import phone from '../images/iphone.png'
import email from '../images/email.png'
import map from '../images/map.png'

const Contact = () => {

  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

  useEffect(() => {
  
  async function callAboutPage() {
    try {
      const res = await fetch('/getdata', {

          headers:{
            "Content-Type": "application/json"
          },
      });
  
      const data = await res.json();
      console.log(data);
      setUserData({...userData, name:data.name,email:data.email, phone:data.phone});
  
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
  
    } catch (error) {
      console.log(error);
    }
  }
  
   callAboutPage();
   
  },[]);

  // we storing data in states
const handleInputs = (e) =>{
  const name = e.target.name;
  const value = e.target.value;

  setUserData({...userData, [name]:value})

}

// Send the data to backend

  const contactForm = async (e) =>{
    e.preventDefault();

    const { name, email, phone, message} = userData;

    const res = await fetch('/contact' , {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name, email, phone , message
      })
  });

    const data = await res.json();

    if(!data){
      console.log("message not send");
    } else{
      alert("Message send");
      setUserData({...userData, message:""});
    }
  }


  return (
<>

<div className='contact_info'>
<div class="container-fluid">
    
      <div className='row'>
        <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'> 

         {/* Phone Number */}

          <div className ='contact_info_item d-flex align-items-center justify-content-start'>
            <img src={phone} alt='phone'/>
              <div className='contact_info_content'>
                  <div className='contact_info_title'>
                      Phone
                  </div>      
                  <div className='contact_info_text'>
                      +91 1111 543 2198
                  </div>      
              </div>
           </div>

         {/* Email */}

         <div className ='contact_info_item d-flex align-items-center justify-content-start'>
            <img src={email} alt='phone'/>
              <div className='contact_info_content'>
                  <div className='contact_info_title'>
                  Email
                  </div>      
                  <div className='contact_info_text'>
                  nitin@mern.com
                  </div>      
              </div>
           </div>

         {/* Address */}

         <div className ='contact_info_item d-flex align-items-center justify-content-start'>
            <img src={map} alt='phone'/>
              <div className='contact_info_content'>
                  <div className='contact_info_title'>
                      Address
                  </div>      
                  <div className='contact_info_text'>
                      Pune, MH, India
                  </div>      
              </div>
           </div>
       </div>
      </div>
  </div>
</div>

{/* contact us form */}

  <div className='contact_form'>

    <div className='container'>
      <div className='row'>
          <div className='col-lg-10 offset-lg-1'>

            <div className='contact_form_container py-5'>
              <div className='contact_form_title'>
                Get in Touch </div>

                <form method='POST' id='contact_form'>
                  <div className='contact_form_name d-flex justify-content-between'>
                    <input type='text' className='contact_form_name input_field' id='contact_form_name' autoComplete='off' name="name" placeholder='Your Name' onChange={handleInputs} value={userData.name} required='true'/>
                    <input type='email' className='contact_form_email input_field' id='contact_form_email' autoComplete='off' name="email" placeholder='Your Email' onChange={handleInputs} value={userData.email} required='true'/>
                    <input type='Number' className='contact_form_phone input_field' id='contact_form_phone' autoComplete='off' name="phone" placeholder='Your Phone' onChange={handleInputs} value={userData.phone} required='true'/>
                  </div>
                </form>

                <div className='contact_form_text d-flex mt-5'>
                <textarea className='text_field contact_form_message' name="message" placeholder='Message' onChange={handleInputs} value={userData.message} cols='30' rows='10'></textarea>
                </div>

                <div className='contact_form_button'>
                  <button type='submit' onClick={contactForm} className='button contact_submit_button'>Send Message</button>
                </div>

              </div>
            </div>

          </div>

    </div>

  </div>

</>
  )
}

export default Contact