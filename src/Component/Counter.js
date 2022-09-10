import React, { useReducer } from "react";
import "../../src/Stylesheet.css";
import { Button } from "semantic-ui-react";

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { value: state.value + 1 };
      case "decrement":
        return { value: state.value - 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div className="counter">
      <Button
        positive
        className="btn"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </Button>
      <label className="lbl">{state.value}</label>
      <Button
        positive
        className="btn"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
