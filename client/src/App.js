import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.toLowerCase() === 'cow') {
      setShowCongratulations(true);
    } else {
      setShowCongratulations(false);
    }
  };

  const handleCowButtonClick = () => {
    const audio = new Audio("https://ssl.gstatic.com/dictionary/static/sounds/20200429/cow--_gb_1.mp3");
    audio.play().then(() => {
      console.log("Animal sound played successfully");
    }).catch(error => {
      console.error("Error playing animal sound:", error);
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Can you spell all these animals names?</h1>
        <h2>Press the button if you need help sounding them out!</h2>
      <span role="img" aria-label="Cow" style={{ fontSize: '5em' }}>
        🐄
      </span>
      <br />
      <button onClick={handleCowButtonClick} style={{ marginTop: '10px' }}>
        Play Name
      </button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type the animal here..."
        style={{ marginTop: '20px', padding: '5px' }}
      />
      {showCongratulations && <p>Congratulations! You got it right!</p>}
    </div>
  );
}

export default App;