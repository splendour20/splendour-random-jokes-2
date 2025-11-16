import React from 'react';

function Buttons({ onFetchNew, onLike }) {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={onFetchNew}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Get New Joke
      </button>
      <button
        onClick={onLike}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        😂 Like
      </button>
    </div>
  );
}

export default Buttons;