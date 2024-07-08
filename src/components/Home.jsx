// src/components/Home.jsx
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.location.href = 'https://homepageee.vercel.app/';
  }, []);

  return (
    <div className="home-container">
      <h2>Redirecting to homepage...</h2>
    </div>
  );
};

export default Home;
