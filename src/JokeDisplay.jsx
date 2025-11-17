import React from 'react';

function JokeDisplay({ loading, setup, punchline }) {
  if (loading) {
    return (
      <p className="text-xl italic text-gray-500 mb-6 animate-pulse">
        Loading joke...
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-200 p-8 rounded-3xl shadow-xl max-w-md mx-auto text-center transform transition-transform duration-300 hover:scale-105">
      {/* Setup */}
      <p className="text-2xl font-extrabold mb-4 text-gray-800">
        {setup}
      </p>

      {/* Punchline */}
      <p className="text-lg font-medium text-gray-700">
        {punchline}
      </p>
    </div>
  );
}

export default JokeDisplay;
