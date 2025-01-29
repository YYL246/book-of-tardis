import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import clickSound from './tardis.mp3';

function App() {
  const quotes = [
    "We're all stories in the end. Just make it a good one, eh?",
    "Do what I do. Hold tight and pretend it's a plan!",
    "The universe is big. It's vast and complicated and ridiculous.",
    "Never cruel or cowardly. Never give up, never give in.", 
    "We're all capable of the most incredible change.",
    "Time is not the boss of you. Rule 408.",
    "In 900 years of time and space, I've never met anyone who wasn't important.",
    "The way I see it, every life is a pile of good things and bad things.",
    "Some people live more in 20 years than others do in 80. It's not the time that matters, it's the person.",
    "You want weapons? We're in a library. Books are the best weapon in the world.",
    "There's no point in being grown up if you can't be childish sometimes.",
    "We are all different people all through our lives, and that's okay.",
    "Letting it get to you - you know what that's called? Being alive.",
    "There's something that doesn't make sense. Let's go and poke it with a stick.",
    "The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things.",
    "You don't just give up. You don't just let things happen.",
    "In all my traveling throughout the universe, I have battled against evil, against power-mad conspirators.",
    "Rest is for the weary, sleep is for the dead.",
    "A straight line may be the shortest distance between two points, but it is by no means the most interesting.",
    "There's always something to look at if you open your eyes.",
    "Sometimes the only choices you have are bad ones, but you still have to choose.",
    "Do you know what thinking is? It's just a fancy word for changing your mind.",
    "The universe is big, it's vast and complicated, and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles.",
    "We all change, when you think about it. We're all different people all through our lives.",
    "Everything's got to end sometime. Otherwise nothing would ever get started.",
    "Love, in all its forms, is the most powerful weapon we have."
  ];

  const [showLanding, setShowLanding] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [audio] = useState(new Audio(clickSound));

  const getRandomQuote = () => {
    audio.currentTime = 0;  // Reset audio to start
    audio.play();
    
    // Stop after 1 second
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 5800);

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setShowLanding(false);
  };

  const handleAgain = () => {
    setShowLanding(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showLanding ? (
          <>
            <h1 
              style={{
                fontSize: '3em',
                animation: 'glow 2s ease-in-out infinite alternate',
                textShadow: '0 0 10px #61dafb, 0 0 20px #61dafb, 0 0 30px #61dafb'
              }}
            >
              Book of Tardis
            </h1>
            <img 
              src={logo} 
              className="App-logo" 
              alt="logo" 
              style={{
                animation: 'App-logo-spin infinite 4s linear, pulse 2s infinite',
                filter: 'drop-shadow(0 0 15px #61dafb)'
              }}
            />
            <button
              className="App-link"
              onClick={getRandomQuote}
              style={{ 
                background: 'none', 
                border: '2px solid #61dafb',
                borderRadius: '5px',
                padding: '10px 20px',
                cursor: 'pointer',
                marginTop: '20px',
                animation: 'pulse 1.5s infinite'
              }}
            >
              Click Here
            </button>
          </>
        ) : (
          <>
            <p style={{
              animation: 'fadeIn 1s ease-in'
            }}>
              {currentQuote}
            </p>
            <button
              className="App-link"
              onClick={handleAgain}
              style={{ 
                background: 'none', 
                border: '2px solid #61dafb',
                borderRadius: '5px',
                padding: '10px 20px',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              Again
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
