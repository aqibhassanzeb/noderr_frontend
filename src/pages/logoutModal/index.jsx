
import React from 'react'
import './index.css'
import { GrFormClose } from 'react-icons/gr';
import { Button } from 'flowbite-react';

const LogoutConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    return (
     isOpen && (
<>
      
      <div className="Confirmmodal-overlay">
        <div className="Confirmmodal">
          <div className="Confirmmodal-content">
          <div className="right">
            <span className="Modalclose rounded-full" onClick={onClose}>
              <GrFormClose className='w-5 h-5'/>
            </span>
          </div>
          <div className='mt-4'>
            <h2 className=''>Are you sure you want to logout?</h2>
          </div>
            <div className="Confirmmodal-buttons">
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onConfirm}>Yes, Logout</Button>
            </div>
          </div>
        </div>
      </div>
</>
     ) 
    );
  };

export default LogoutConfirmationModal


