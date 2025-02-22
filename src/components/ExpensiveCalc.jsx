import { useState, useMemo } from "react";

function ExpensiveCalc() {
  const [num, setNum] = useState(5);

  const square = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold">Memoized Calculation</h2>
      <p>Number: {num}</p>
      <p>Square: {square}</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => setNum(num + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default ExpensiveCalc;
