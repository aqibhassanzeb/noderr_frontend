import React from 'react'
import './index.css'
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
const Landing = () => {
  return (
    <div className='landing_page'>
        <Header/>
        <div className='about'>
            <h2 className='about_heading'>Node Deployment</h2>
            <h3 className='about_subheading'>One click node deployment</h3>
            <p>
            Noderr simplifies the world of blockchain, making nodes accessible to everyone. With effortless deployment, you can unlock exclusive early adopter rewards through our cutting-edge decentralization platform. Join us in shaping the future of blockchain accessibility
            .
            </p>
            <Link to="/dashboard" className='btn primary'>Get started</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Landing