import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ taskId, onTimeUpdate }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("Timer started");  // Debug log
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        onTimeUpdate(taskId, time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, onTimeUpdate, taskId]);

  return (
    <div className="timer">
      <span>Time: {time} seconds</span>
      <button onClick={() => setIsActive(!isActive)} className="timer-button">
        {isActive ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
