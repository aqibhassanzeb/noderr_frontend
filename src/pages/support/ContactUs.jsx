import React, { useState } from 'react';
import PageHeader from '../../components/dashboard/pageHeader/pageHeader';
import './contact.css'
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"Support"} badge={"GM, Noderr"} />
        <div className="contact-form">
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <label htmlFor="name" className="text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input_field text-white"
                required
              />
            </div>
            <div className="input_container">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input_field"
                required
              />
            </div>
            <div className="input_container">
              <label htmlFor="message" className="text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="input_field"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit_btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
