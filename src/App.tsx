import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [timeLeft, settimeLeft] = useState(1500);

  const intervalRef = useRef<number | null>(null);
  function startTimer() {
    intervalRef.current = setInterval(() => {
      settimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current as number)
          intervalRef.current = null
          return 0
        }
        return prevTimeLeft - 1
      });

    }, 1000);
  }
  function stopTimer() {
    clearInterval(intervalRef.current as number)
  }
  return (
    <>
      <div className="wrapper">
        <h1>Pomodoro Timer</h1>

        <div className="timer-display">
          <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(timeLeft % 60).padStart(2, "0")}</span>
        </div>

        <div className="buttons">
          <button onClick={startTimer}>START</button>
          <button onClick={stopTimer}>STOP</button>
        </div>
      </div>
    </>
  )
}

export default App
