import React from 'react';

function JokeDisplay({ loading, setup, punchline }) {
  if (loading) {
    return <p className="text-xl italic text-gray-500 mb-4 animate-pulse">Loading joke...</p>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl shadow-lg max-w-md mx-auto text-center transform transition-transform duration-300 hover:scale-105">
      <p className="text-xl font-bold mb-4 text-gray-800">{setup}</p>
      <p className="text-lg text-gray-700">{punchline}</p>
    </div>
  );
}

export default JokeDisplay;
