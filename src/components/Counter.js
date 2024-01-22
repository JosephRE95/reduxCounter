import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const addHandler = () => {
    dispatch({ type: 'add' });
  };

  const subHandler = () => {
    dispatch({ type: 'subtract' });
  };

  const toggleCounterHandler = () => {
    // Implement your toggle logic here
  };

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








// CLASS COMPONENT REDUX IN USE BELOW


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import classes from './Counter.module.css';

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   toggleCounterHandler = () => {
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>Add</button>
//           <button onClick={this.decrementHandler}>Subtract</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'add' }),
//     decrement: () => dispatch({ type: 'subtract' })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
