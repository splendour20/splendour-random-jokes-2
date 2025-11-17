import React, { useState, useEffect } from 'react';
import JokeDisplay from './JokeDisplay.jsx';
import Buttons from './Buttons.jsx';
import LikeCounter from './LikeCounter.jsx';

function App() {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const [loading, setLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(0);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke({ setup: 'Oops!', punchline: 'Something went wrong. Try again!' });
    } finally {
      setLoading(false);
    }
  };

  const handleLike = () => {
    setLikeCount(prev => prev + 1);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 space-y-6">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
        Random Joke Generator
      </h1>

      {/* Joke card */}
      <JokeDisplay loading={loading} setup={joke.setup} punchline={joke.punchline} />

      {/* Buttons */}
      <Buttons onFetchNew={fetchJoke} onLike={handleLike} />

      {/* Like counter */}
      <LikeCounter count={likeCount} />
    </div>
  );
}

export default App;
