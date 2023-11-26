import React, { useState } from "react";

const Counter = () => {
  // 0에서 출발
  // 1씩 증가
  // 1씩 감소하는
  // count 상태

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default Counter;
