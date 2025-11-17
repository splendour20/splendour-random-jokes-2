import React from 'react';

function LikeCounter({ count }) {
  return (
    <div className="text-gray-700 font-semibold text-lg">
      Likes: <span className="text-green-500">{count}</span>
    </div>
  );
}

export default LikeCounter;
