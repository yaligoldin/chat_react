import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function LogOutModal({ showModal, closeModal }) {
    const navigate = useNavigate()

  const handleCancel = () => {
    // Close the modal
    closeModal();
  };

  const handleLogOut = () => {
    navigate('/');
  };


  return (
    showModal && (
      <div className="modal">
        <div className="modal-content-logout">
          <h2>Are you sure you want to log out?</h2>
          <div className="modal-actions">
            <button onClick={handleCancel} className="btn btn-secondary modal-cancel">Cancel</button>
            <button onClick={handleLogOut} className="btn btn-danger">Log out</button>
          </div>
        </div>
      </div>
    )
  );
}

export default LogOutModal;
