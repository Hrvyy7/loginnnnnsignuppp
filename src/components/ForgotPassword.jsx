// src/components/ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent');
      navigate('/');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
