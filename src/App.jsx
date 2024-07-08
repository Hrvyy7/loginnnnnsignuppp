// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import './styles.css';

const App = () => {
  const [form, setForm] = useState('login');

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <div className="form-switch">
          <button onClick={() => setForm('login')}>Login</button>
          <button onClick={() => setForm('signup')}>Sign Up</button>
          <button onClick={() => setForm('forgot')}>Forgot Password</button>
        </div>
      </div>
    </Router>
  );
};

export default App;
