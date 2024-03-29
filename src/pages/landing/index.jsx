import React, { useState } from 'react'
import './index.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Landing = () => {
  const [email, setEmail] = useState(null)

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

  const handleSubmit = () =>{
    if (validateEmail(email)) {
      toast.success("Your have been signed up for beta launch!");
      setEmail("")
  } else {
      toast.error("Email is not valid.");
  }
  }
  return (
    <div className='landing_page'>
        <Header/>
        <div className='about'>
            <h2 className='about_heading'>Node Deployment</h2>
            {/* <h3 className='about_subheading'>One click node deployment</h3> */}
            <p>
            Noderr simplifies the world of blockchain, making nodes accessible to everyone. With effortless deployment, you can unlock exclusive early adopter rewards through our cutting-edge decentralized platform. Join us in shaping the future of blockchain accessibility
            .
            </p>
            <div className="input_container">
            <label htmlFor="email">sign up for Beta launch</label>
            <input type="email" id="email" placeholder='abc@xyz.com'value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>           
          <button type="button" className="submit_btn" onClick={()=>{handleSubmit()}}>
            Sign-Up
          </button>
        </div>
        <ToastContainer />
        <Footer/>
    </div>
  )
}

export default Landing