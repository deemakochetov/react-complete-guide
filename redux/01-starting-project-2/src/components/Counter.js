import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decerementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} type="button">
          Increment
        </button>
        <button onClick={incrementBy5Handler} type="button">
          Increment by 5
        </button>
        <button onClick={decerementHandler} type="button">
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
