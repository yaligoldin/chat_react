import React, { useState } from 'react';

function AddContactModal({ showModal, closeModal, handleAddContact }) {
  const [contact, setContact] = useState('');

  const handleInputChange = (event) => {
    setContact(event.target.value);
  };

  const handleCancel = () => {
    // Close the modal
    closeModal();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddContact(contact, setContact);
    }
  };
  
  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Add a New Contact...</h2>
          <input
            type="text"
            value={contact}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter contact name"
          />
          <div className="modal-actions">
            <button onClick={handleCancel} className="btn btn-secondary modal-cancel">Cancel</button>
            <button onClick={() => handleAddContact(contact, setContact)} className="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    )
  );
}

export default AddContactModal;
