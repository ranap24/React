import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createActions } from '../Store/counterSlice.js';

const Counter = () => {
  const counter = useSelector((state)=>state.counter.counter);
  const show = useSelector((state)=>state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {dispatch(createActions.togglehandler())};

  function handleIncrement()
  {
    dispatch(createActions.increment());
  }
  function handleDecrement()
  {
    dispatch(createActions.decrement());
  }
  function handleIncrease()
  {
    dispatch(createActions.increase(10));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className = 'counter'>
        <button type='button' onClick={handleIncrement}>increment</button>
        <button onClick={handleIncrease}>Increase by 10</button>
        <button type='button' onClick={handleDecrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
