import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold">Timer</h2>
      <p className="text-xl">{seconds} sec</p>
    </div>
  );
}

export default Timer;
