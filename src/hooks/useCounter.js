import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 2);
  const reset = () => setCount(initialValue);

  return { count, increment, reset };
}

export default useCounter;
