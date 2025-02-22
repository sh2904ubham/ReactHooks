import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`p-4 border rounded-lg shadow-md w-64 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-bold">Theme Switcher</h2>
      <button
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
