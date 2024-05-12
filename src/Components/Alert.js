// DismissibleAlert.js
import React, { useState, useEffect } from 'react';
import './css/alert.css';

const Alert = ({ message, type }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 10000); // Dismiss the alert after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={`dismissible-alert ${show ? 'show' : ''} ${type}`}>
      <div className="alert-content">
        {message}
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;