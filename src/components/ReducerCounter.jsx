import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold">Reducer Counter</h2>
      <p className="text-xl">{state.count}</p>
      <button
        className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className="px-3 py-1 bg-red-500 text-white rounded"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
    </div>
  );
}

export default ReducerCounter;
