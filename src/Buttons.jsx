import React from 'react';

function Buttons({ onFetchNew, onLike }) {
  return (
    <div className="flex justify-center space-x-6 mb-8">
      {/* Get New Joke Button */}
      <button
        onClick={onFetchNew}
        className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        Get New Joke
      </button>

      {/* Like Button */}
      <button
        onClick={onLike}
        className="bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        👍 Like
      </button>
    </div>
  );
}

export default Buttons;
