import React from 'react';

function Buttons({ onFetchNew, onLike }) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={onFetchNew}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        Get New Joke
      </button>
      <button
        onClick={onLike}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        😂 Like
      </button>
    </div>
  );
}

export default Buttons;
