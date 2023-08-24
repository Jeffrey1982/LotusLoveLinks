import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailVerification = (props) => {
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');

  useEffect(() => {
    // Extract the verification token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    // Send a request to your backend to verify the token
    axios
      .post('/api/users/verify-email', { token })
      .then((response) => {
        setVerificationStatus('Email verified successfully!');
      })
      .catch((error) => {
        setVerificationStatus('Email verification failed.');
      });
  }, []);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{verificationStatus}</p>
    </div>
  );
};

export default EmailVerification;
