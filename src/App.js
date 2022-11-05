import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(0);

  const handlePlus = (action) => {
    if (action.type === "PLUS") {
      setData(data + action.payload);
    }
  };

  const handleMinus = (action) => {
    if (action.type === "MINUS") {
      setData(data - action.payload);
    }
  };

  const handleData = (action) => {
    if (action.type === "PLUS") {
      setData(data + action.payload);
    } else if (action.type === "MINUS") {
      setData(data - action.payload);
    }
  };

  return (
    <>
      <p>{data}</p>
      <button onClick={() => handlePlus({ type: "PLUS", payload: 1 })}>
        +
      </button>
      <button onClick={() => handleMinus({ type: "MINUS", payload: 1 })}>
        -
      </button>
      <button onClick={() => handleData({ type: "MINUS", payload: 1 })}>
        Common
      </button>
    </>
  );
};

export default App;
