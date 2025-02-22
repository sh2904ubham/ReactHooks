import Counter from "./components/Counter";
import Timer from "./components/Timer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import InputFocus from "./components/InputFocus";
import ReducerCounter from "./components/ReducerCounter";
import ExpensiveCalc from "./components/ExpensiveCalc";
import { ThemeProvider } from "./context/ThemeContext";
import ClickTracker from "./components/ClickTracker";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center gap-4 p-6">
        <h1 className="text-3xl font-bold underline">React Hooks Demo</h1>
        <Counter />
        <ClickTracker />
        <Timer />
        <ThemeSwitcher />
        <InputFocus />
        <ReducerCounter />
        <ExpensiveCalc />
      </div>
    </ThemeProvider>
  );
}

export default App;
