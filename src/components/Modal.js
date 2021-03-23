import React from 'react';
import './Modal.css';

export const Modal = ({ show, close }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Please enter the required information</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>SigIn</h4>
          <p>Already have an account?</p>

        </div>
        
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};