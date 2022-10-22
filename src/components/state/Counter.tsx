import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "dectrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction;
// type CounterAction = {
//   //   type: string;
//   type: "increment" | "dectrement" | "reset";
//   payload?: number;
// };

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "dectrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
const Counter = () => {
  const [state1, dispatch1] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state1.count}
      <button onClick={() => dispatch1({ type: "dectrement", payload: 10 })}>
        Dectrement- 10
      </button>
      <button onClick={() => dispatch1({ type: "increment", payload: 10 })}>
        Increment+ 10
      </button>
      <button onClick={() => dispatch1({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
