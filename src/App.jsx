import { useState, useRef } from 'react';
import './style.css'; // Your existing styles

function App() {
  // State variables
  const [showResponse, setShowResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [showGif, setShowGif] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [originalMessageVisible, setOriginalMessageVisible] = useState(true);

  // We'll store the no-button’s (x, y) position in state once we move it
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  // This tracks whether the "No" button should run away (i.e. move absolutely)
  const [runAway, setRunAway] = useState(false);

  // Reference to the audio element so we can call play()
  const audioRef = useRef(null);

  // "Yes" button click
  const handleYesClick = () => {
    setShowResponse(true);
    setResponseMessage('Yay! 💖 I love you more! 😘');
    setButtonsVisible(false);
    setOriginalMessageVisible(false);
    setShowGif(true);

    // Try to play the audio if reference is set
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
    }
  };

  // Move "No" button to a random position on screen
  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);  // approximate button width
    const y = Math.random() * (window.innerHeight - 50); // approximate button height
    setNoButtonPos({ x, y });
  };

  // On "No" button hover or click: switch to "runAway" mode and move it
  const handleNoHover = () => {
    setRunAway(true);
    moveNoButton();
  };
  const handleNoClick = () => {
    setRunAway(true);
    moveNoButton();
  };

  // Dynamically set the "No" button style
  const noButtonStyle = runAway
    ? {
        position: 'absolute',
        left: noButtonPos.x,
        top: noButtonPos.y,
      }
    : {}; 
    // If runAway is false, no inline style is applied (it stays side-by-side).

  return (
    <div className="App">
      {/* Hidden background music */}
      <audio ref={audioRef} style={{ display: 'none' }}>
        <source src="/these-words.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="container">
        {originalMessageVisible && <h1>Will You Be My Valentine? 💕</h1>}

        {buttonsVisible && (
          <div className="buttons">
            <button id="yes-btn" onClick={handleYesClick}>
              Yes 💘
            </button>

            <button
              id="no-btn"
              onMouseOver={handleNoHover}
              onClick={handleNoClick}
              style={noButtonStyle}
            >
              No 💔
            </button>
          </div>
        )}

        {showResponse && <p id="response-message">{responseMessage}</p>}

        {showGif && (
          <img
            src="/cat-hearts.gif"
            alt="Cat with hearts"
            style={{ display: 'block', margin: '20px auto' }}
          />
        )}
      </div>
    </div>
  );
}

export default App;