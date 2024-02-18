import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
      { image: '🐄', word: 'cow', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/cow--_gb_1.mp3'},
      { image: '🐎', word: 'horse', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/horse--_gb_1.mp3'},
      { image: '🐔', word: 'chicken', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/chicken--_gb_1.mp3'},
      { image: '🐸', word: 'frog', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/frog--_gb_1.mp3'},
      { image: '🐕', word: 'dog', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/dog--_gb_1.mp3'}
  ];

  const congrats = [
      "Well done!",
      "Nice work!",
      "Great job!",
      "You're awesome!"
  ]

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const currentKeyword = images[currentImageIndex].word
    if (event.target.value.toLowerCase() === currentKeyword) {
      setShowCongratulations(true);
      const newIndex = (currentImageIndex + 1) % images.length
        setCurrentImageIndex(newIndex)
    } else {
      setShowCongratulations(false);
    }
  };

  const handleCowButtonClick = () => {
    const audio = new Audio(images[currentImageIndex].sound);
    audio.play().then(() => {
      console.log("Animal sound played successfully");
    }).catch(error => {
      console.error("Error playing animal sound:", error);
    });
  };

  const getRandomCongrats = () => {
      const rand = Math.floor(Math.random() * congrats.length)
      return congrats[rand]
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Can you spell all these animals names?</h1>
        <h2>Press the button if you need help sounding them out!</h2>
      <span role="img" aria-label="Cow" style={{ fontSize: '5em' }}>
        {images[currentImageIndex].image}
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
      {showCongratulations && <p>{getRandomCongrats()} Now try another!</p>}
    </div>
  );
}

export default App;