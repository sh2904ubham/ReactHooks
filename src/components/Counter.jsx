import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold">Counter</h2>
      <p className="text-xl">{count}</p>
      <p className="text-xl">{count}</p>
      <p className="text-xl">{count}</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
