import React, { useState, useEffect } from 'react';
import { generateRandomArray, isArraySorted, shuffleArray, swapElements } from './gameLogic';
import './App.css'; // Make sure this line is present to import the styles

function App() {
  const [numbers, setNumbers] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isGameActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer +   1);
      },   1000);
    } else if (!isGameActive && timer !==   0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isGameActive, timer]);

  const startGame = () => {
    const newNumbers = generateRandomArray(10);
    setNumbers(newNumbers);
    setIsGameActive(true);
    setTimer(0);
  };

  const swapNumbers = (indexA, indexB) => {
    if (!isGameActive) return;
    const newNumbers = swapElements([...numbers], indexA, indexB);
    setNumbers(newNumbers);
    checkGameOver();
  };

  const checkGameOver = () => {
    if (isArraySorted(numbers)) {
      alert('Congratulations! You sorted the numbers correctly.');
      setIsGameActive(false);
    }
  };

  return (
    <div className="App">
      <h1>Counting and Sorting Game</h1>
      <button onClick={startGame} disabled={isGameActive}>
        Start Game
      </button>
      <div className="game-board">
        {numbers.map((number, index) => (
          <div key={index} className="number-card">
            <span>{number}</span>
            <button onClick={() => swapNumbers(index, index -   1)} disabled={index ===   0 || !isGameActive}>
              &#8592; {/* Left arrow */}
            </button>
            <button onClick={() => swapNumbers(index, index +   1)} disabled={index === numbers.length -   1 || !isGameActive}>
              &#8594; {/* Right arrow */}
            </button>
          </div>
        ))}
      </div>
      <div className="timer">Time: {timer} seconds</div>
    </div>
  );
}

export default App;