import React from 'react';

function JokeDisplay({ loading, setup, punchline }) {
  if (loading) {
    return <p className="text-xl italic text-gray-600 mb-4">Loading joke...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-md text-center">
      <p className="text-lg font-semibold mb-2">{setup}</p>
      <p className="text-lg">{punchline}</p>
    </div>
  );
}

export default JokeDisplay;