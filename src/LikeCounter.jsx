import React from 'react';

function LikeCounter({ count }) {
  return (
    <p className="text-lg font-medium">
      Liked jokes: {count}
    </p>
  );
}

export default LikeCounter;