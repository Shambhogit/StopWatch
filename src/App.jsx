import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null); // Store interval ID

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // Cleanup
  }, [isRunning]);

  const handleStartButton = () => {
    setIsRunning(true);
  };

  const handleStopButton = () => {
    setIsRunning(false);
  };

  const handleResetButton = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  // Format numbers to be two digits (e.g., 01, 09, 15)
  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <div className="text-white justify-center items-center flex flex-col w-full h-screen bg-zinc-900">
      <h3 className="text-5xl">Online Timer & Stopwatch</h3>
      <h1 className="text-[250px] font-semibold">
        {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}
      </h1>

      <div className="flex gap-10">
        <button
          onClick={handleStartButton}
          className="py-3 w-[220px] text-2xl font-semibold bg-blue-500 rounded-full"
        >
          Resume
        </button>
        <button
          onClick={handleStopButton}
          className="py-3 w-[220px] text-2xl font-semibold bg-red-500 rounded-full"
        >
          Pause
        </button>
        <button
          onClick={handleResetButton}
          className="py-3 w-[220px] text-2xl font-semibold bg-zinc-700 rounded-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
