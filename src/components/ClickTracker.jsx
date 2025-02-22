//import useCounter from "./useCounter";
import useCounter from "../hooks/useCounter";
function ClickTracker() {
  const { count, increment, reset } = useCounter();

  return (
    <div className="p-4 border rounded-lg shadow-md w-64 flex flex-col items-center">
      <h2 className="text-xl font-bold">Click Tracker</h2>
      <p className="text-lg mt-2">
        Total Clicks: <span className="font-semibold">{count}</span>
      </p>
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={increment}
      >
        Click Me
      </button>
      <button
        className="mt-2 px-4 py-2 bg-gray-500 text-white rounded"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default ClickTracker;
