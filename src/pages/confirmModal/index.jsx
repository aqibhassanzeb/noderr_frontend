
import React from 'react'
import './index.css'
import { Button } from 'flowbite-react';
import { GrFormClose } from 'react-icons/gr';
  
const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    return (
      isOpen && (
        <div className="Confirmmodal-overlay">
        <div className="Confirmmodal">
          <div className="Confirmmodal-content">
          <div className="right">
            <span className="Modalclose rounded-full" onClick={onClose}>
              <GrFormClose className='w-5 h-5'/>
            </span>
          </div>
          <div className='mt-4'>
            <h2 className=''>Are you sure you want to delete this node?</h2>
          </div>
            <div className="Confirmmodal-buttons">
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onConfirm}>Delete</Button>
            </div>
          </div>
        </div>
      </div>
      )
    );
  };
  
  export default ConfirmationModal
  