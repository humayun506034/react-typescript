
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch()
  const { count } = useAppSelector((state) => state.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Counter with redux</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
