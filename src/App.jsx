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
        {form === 'login' && <Login />}
        {form === 'signup' && <SignUp />}
        {form === 'forgot' && <ForgotPassword />}
        <div className="form-switch">
          <button onClick={() => setForm('login')}>Login</button>
          <button onClick={() => setForm('signup')}>Sign Up</button>
          <button onClick={() => setForm('forgot')}>Forgot Password</button>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
