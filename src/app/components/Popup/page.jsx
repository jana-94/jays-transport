// components/Popup.jsx
'use client';
import React from 'react';
import './Popup.css'; // Or inline styles

export default function Popup({ onClose, children }) {
  
    const stopPropagation = (e) => {
      e.stopPropagation(); // prevent click from bubbling up to overlay
    };
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={stopPropagation}>
        <div className='close-btn-outline'>
        <button className="close-btn" onClick={onClose}>✖</button>
        </div>
        {children}
      </div>
    </div>
  );
}
