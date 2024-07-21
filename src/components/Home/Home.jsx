// src/components/Home.jsx
import React from 'react';


const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center py-24 min-h-screen font-poppins  text-black dark:text-white">
      <h1 className="text-6xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Connect. Learn. Grow: Your Mentorship Network.
      </h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        Discover the power of mentorship and collaboration. Find the right mentor or teammate to guide you through your journey and elevate your career.
      </p>
      <div className="flex space-x-4 mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Home;
