// import { connect } from "react-redux";
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "add") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "subtract") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
