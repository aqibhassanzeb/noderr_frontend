import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageHeader from '../../components/dashboard/pageHeader/pageHeader';

import './contact.css'
import { toast } from 'react-toastify';
import { images } from '../../images';
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
const ContactPage = () => {
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', e.target, 'public key')
      .then((result) => {
        toast.success('submitted successfully', {
          theme: "colored"

        })
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        toast.error('some went wrong!', {
          theme: "colored"

        })
      });

    console.log(formData);
    setFormData({ subject: '', email: '', message: '' });
  };
  const navigate = useNavigate();
  const handleCloseCreate = () => {
    navigate('/dashboard/support');
  };
  return (
    <div className="right_dashboard">
      <div className="right_container">
      <div className="">
            <span className="close" onClick={handleCloseCreate} >
              <IoArrowBackCircle className="text-white w-8 h-8" />
            </span>
          </div>
        <PageHeader page_title={"Support"} badge={"GM, Noderr"}
          profilePic={images.FakePic} />
        <section >
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                <input name='email' value={formData.email}
                  onChange={handleChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500  dark:shadow-sm-light" placeholder="Enter Your Valid Email" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                <input name='subject' value={formData.subject}
                  onChange={handleChange} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500  dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
                <textarea value={formData.message}
                  onChange={handleChange} name='message' id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 " placeholder="Leave a message..." />
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;
