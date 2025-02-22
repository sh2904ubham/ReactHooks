import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold">Auto-Focus Input</h2>
      <input
        ref={inputRef}
        className="border p-1 w-full"
        placeholder="Type here..."
      />
    </div>
  );
}

export default InputFocus;
