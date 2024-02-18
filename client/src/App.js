import React, { useState } from 'react';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

    /* JSON array containing an emoji, name of emoji, and a sound link.
    *  Users will be shown an emoji and are expected to type the name based on what they see.
    *  If they need help they can also click a button to play the name of the animal. */
  const images = [
      { image: '🐄', word: 'cow', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/cow--_gb_1.mp3'},
      { image: '🐎', word: 'horse', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/horse--_gb_1.mp3'},
      { image: '🐔', word: 'chicken', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/chicken--_gb_1.mp3'},
      { image: '🐸', word: 'frog', sound: 'https://ssl.gstatic.com/dictionary/static/sounds/20200429/frog--_gb_1.mp3'},
      { image: '🐕', word: 'dog', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/dog-uk.mp3'},
      { image: '🐈', word: 'cat', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/cat-uk.mp3'},
      { image: '🐦', word: 'bird', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/bird-us.mp3'},
      { image: '🦁', word: 'lion', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/lion-us.mp3'},
      { image: '🐻', word: 'bear', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/bear-us.mp3'},
      { image: '🦭', word: 'seal', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/seal-us.mp3'},
      { image: '🐅', word: 'tiger', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/tiger-1-us.mp3'},
      { image: '🦈', word: 'shark', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/shark-us.mp3'},
      { image: '🐬', word: 'dolphin', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/dolphin-us.mp3'},
      { image: '🐟', word: 'fish', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/fish-uk.mp3'},
      { image: '🦆', word: 'duck', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/duck-us.mp3'},
      { image: '🦉', word: 'owl', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/owl-us.mp3'},
      { image: '🦃', word: 'turkey', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/turkey-us.mp3'},
      { image: '🐧', word: 'penguin', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/penguin-us.mp3'},
      { image: '🐘', word: 'elephant', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/elephant-us.mp3'},
      { image: '🐒', word: 'monkey', sound: 'https://api.dictionaryapi.dev/media/pronunciations/en/monkey-us.mp3'}
  ];

  /* Just some congrats messages for extra variance */
  const congrats = [
      "Well done!",
      "Nice work!",
      "Great job!",
      "You're awesome!"
  ]

    /* Function that handles user input, basically just verifies it against expected input based on image */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const currentKeyword = images[currentImageIndex].word //Get the current image being displayed
    if (event.target.value.toLowerCase() === currentKeyword) { //If the lowercase version of user response == expected:
      setShowCongratulations(true); //Show them the congrats message
      const newIndex = (currentImageIndex + 1) % images.length //Then get the next animal image to show
        setCurrentImageIndex(newIndex) //We have to set the state of currentImageIndex or else it won't update
    } else {
      setShowCongratulations(false); //If the value != expected just don't display congrats message
    }
  };

  /* Function to handle the audio cue created by pressing the sound button */
  const handleCowButtonClick = () => {
    const audio = new Audio(images[currentImageIndex].sound); // Get audio from our array above
    audio.play().then(() => { //.play() is an asynch function, so we need to handle the promise it creates
      console.log("Animal sound played successfully"); // We do this by printing a simple message to console
    }).catch(error => {
      console.error("Error playing animal sound:", error); // Or throwing an error when it fails
    });
  };

  /* This handles the selection of random congratulations messages */
  const getRandomCongrats = () => {
      const rand = Math.floor(Math.random() * congrats.length) // Pick a random number within the array
      return congrats[rand]
  }

  return (
      <div className="container">
    <div className="content">
      <h1>Can you spell all these animals names?</h1>
        <h2>Press the button if you need help sounding them out!</h2>
      <span role="img" aria-label="Cow" style={{ fontSize: '5em' }}>
        {images[currentImageIndex].image}
      </span>
      <br />
      <button onClick={handleCowButtonClick} style={{ marginTop: '10px' }}>
        Play Animal Name
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
          </div>
  );
}

export default App;