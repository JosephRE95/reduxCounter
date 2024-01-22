import {  useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
const counter = useSelector(state => state.counter);

const addHandler =() =>{
  dispatch({ type: 'add'})
}

const subHandler =() =>{
  dispatch({ type: 'subtract'})
}

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={subHandler}>Subtract</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
