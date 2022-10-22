import React, { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  useEffect(() => {
    // componentDidMount
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    // componentDidUpdate
    console.log("componentDidUpdate");
  }, [count]);

  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log("componentWillUnmount");
    };
  }, [count]);

  return (
    <div>
      <p>You clicked count {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      {/* <p>You clicked count2 {count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button> */}
    </div>
  );
};

export default Example;
