import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
<div style={{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  <div style={{
    backgroundColor: 'whitesmoke', // Light background for the modal content
    color: 'black', // Ensure text is visible on light background
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '250px',
    width: '70%',
  }}>
    {children}
    <button onClick={onClose} style={{ marginTop: '20px' }}>Close</button>
  </div>
</div>
  );
}

export default Modal;

