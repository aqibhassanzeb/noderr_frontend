/* import React from "react";
import "./index.css";
import Togglor from "../../components/toggle";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
const Support = () => {
 return (
   <div className="right_dashboard">
     <div className="right_container">
       <PageHeader page_title={"Support"} badge={"GM, Stranger"} />
       <form className="support_form">
         <div className="input_container">
           <label htmlFor="name">Name</label>
           <input type="text" id="name" />
         </div>
         <div className="input_container">
           <label htmlFor="email">Email</label>
           <input type="email" id="email" />
         </div>
         <div className="input_container">
           <label htmlFor="message">Message</label>
           <textarea id="message" rows="5"></textarea>
         </div>
         <button type="button" className="submit_btn">
           submit
         </button>
       </form>
     </div>
   </div>
 );
};

export default Support; */

import React from 'react';
import PageHeader from '../../components/dashboard/pageHeader/pageHeader';
import { Link } from 'react-router-dom';

const SupportSection = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"Support"} badge={"GM, Noderr"} />
        <div className="text-center">
          <h2 className="text-3xl font-bold  mb-4">Need Help?</h2>
          <p className="text-lg  mb-8">We're here to assist you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h3>
            <p className="text-gray-600 mb-4">Find answers to common questions.</p>
            <Link to="/dashboard/faq" className="text-blue-600 hover:text-blue-800">Read FAQs &rarr;</Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">Get in touch with our support team.</p>
            <Link to="/dashboard/contact-us" className="text-blue-600 hover:text-blue-800">Contact Support &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;

