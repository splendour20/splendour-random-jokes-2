import React from 'react';

function LikeCounter({ count }) {
  return (
    <div className="mt-4 text-lg font-bold text-gray-800 text-center">
      Likes:{" "}
      <span className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-3 py-1 rounded-full shadow-md inline-block">
        {count}
      </span>
    </div>
  );
}

export default LikeCounter;

